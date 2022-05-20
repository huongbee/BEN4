const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PASSWORK_KEY = require('../constants/common.constant').PASSWORK_KEY;
const SHA256 = require("crypto-js/sha256");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String
  },
  password: { //  sha256(password + PASSWORK_KEY)
    type: String,
    required: true,
  },
  oldPassword: {
    type: String,
    default: null
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
    const user = { name: 'My Name' }// await UserModel.findOne({ username }).lean();
    return user;
  }
  async lockUser(username) {
    const locked = await UserModel.updateOne({ username }, { isLocked: true });
    return locked;
  }
  async updatePassword(user, password) {
    // const update = await UserModel.updateOne(
    //   { _id: user._id },
    //   {
    //     $set: {
    //       password, // cap nhat mk moi
    //       oldPassword: user.password// luu lai mk cu
    //     }
    //   }
    // );
    const update = { name: 'updated' }
    return update;
  }
}

// (async () => {
//   for (let i = 1; i <= 1000; i++) {
//     await UserModel.create({
//       username: 'user-' + i,
//       password: SHA256(1 + PASSWORK_KEY),
//       fullname: 'User ' + i,
//       avatar: ''
//     });
//   }
// })()
// {
//     "_id" : ObjectId("62878f5deb0dabff2b395323"),
//     "username" : "user-9",
//     "password" : "ff42cc9103dccd980778694cb22794e23fb9f40a906394896852d9e7c94e8f21",
//     "oldPassword" : null,
//     "fullname" : "User 9",
//     "avatar" : "",
//     "isLocked" : false,
//     "__v" : 0
// }
module.exports = { User: new User() };
