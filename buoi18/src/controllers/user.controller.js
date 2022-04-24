const SHA256 = require("crypto-js/sha256");
const UserModel = require('../models/user.model').User;
const PASSWORK_KEY = require('../constants/common.constant').PASSWORK_KEY;

class UserController {
  async register(username, password, fullname, avatar) {
    // insert user
  }
  async login(username, password) {
    const user = await UserModel.findUserByUsername(username);
    if (!user) {
      return { success: false, message: 'Can not find user', data: null };
    }
    // check pass sha256(password + PASSWORK_KEY)
    const passToCheck = SHA256(password + PASSWORK_KEY);
    if (passToCheck !== user.password) {
      return { success: false, message: 'Password invalid', data: null };
    }
    delete user.password;
    return { success: true, message: 'Success', data: user };
  }
}

module.exports = {
  UserController: new UserController()
}