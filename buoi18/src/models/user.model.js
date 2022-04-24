const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: { //  sha256(password + PASSWORK_KEY)
    type: String,
    required: true,
  },
  fullname: String,
  avatar: String
});
const UserModel = mongoose.model('user', UserSchema);

class User {
  async findUserByUsername(username) {
    const user = await UserModel.findOne({ username }).lean();
    return user;
  }
}
module.exports = { User: new User() };