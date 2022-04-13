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
  // sai email => khong tim thay user
  // sai pass  => sai thong tin mk

  // sai email || sai pass  => sai thong tin user
}
module.exports = User;
