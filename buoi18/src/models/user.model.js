const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const PASSWORK_KEY = require('../constants/common.constant').PASSWORK_KEY;
// const SHA256 = require("crypto-js/sha256");

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
  avatar: String,
  isLocked: {
    type: Boolean,
    default: false
  }
});
const UserModel = mongoose.model('user', UserSchema);

class User {
  async findUserByUsername(username) {
    const user = await UserModel.findOne({ username }).lean();
    return user;
  }
  async lockUser(username) {
    const locked = await UserModel.updateOne({ username }, { isLocked: true });
    return locked;
  }
}

// (async () => {
//   // await UserModel.create({
//   //   username: 'nguyenvana',
//   //   password: SHA256('111111' + PASSWORK_KEY),  // f2cd2919f32a93ecbc5c4911ab90410d3e7b8fab939b4ed6d09825e978c0f150
//   //   fullname: 'Nguyen Van A',
//   //   avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'
//   // });
// })()
module.exports = { User: new User() };