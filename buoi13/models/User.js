const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const md5 = require('md5');

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: String,
  name: String,
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  receiveRequests: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  sendRequests: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});
const UserModel = mongoose.model('User', UserSchema);

class User extends UserModel {
  #PASS_KEY = 'secret_key';
  // create a new user
  async signUp(email, password, name) {
    const pass = md5(md5(password + this.#PASS_KEY));
    const user = await UserModel.create({ email, password: pass, name });
    return user;
  }
  async signIn(email, password) {
    const user = await UserModel.findOne({ email }).lean();
    if (!user) {
      return { success: false, data: null, message: 'Can not find user' };
    }
    // check pass
    const signInPass = md5(md5(password + this.#PASS_KEY));
    if (signInPass !== user.password) {
      return { success: false, data: null, message: 'Password invalid' };
    }
    const { _id, posts, friends, receiveRequests, sendRequests, name } = user;
    return {
      success: true,
      data: { _id, posts, friends, receiveRequests, sendRequests, email, name },
      message: 'Success'
    };
  }
}
module.exports = User;
