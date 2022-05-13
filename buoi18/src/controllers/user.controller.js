const SHA256 = require("crypto-js/sha256");
const UserModel = require('../models/user.model').User;
const { PASSWORK_KEY, REDIS_KEY } = require('../constants/common.constant');
const RedisService = require('../services/redis.service');
const redis = new RedisService();
class UserController {
  async register(username, password, fullname, avatar) {
    // insert user
  }
  async login(username, password) {
    const user = await UserModel.findUserByUsername(username);
    if (!user) {
      return { success: false, message: 'Can not find user', data: null };
    }
    if (user.isLocked) {
      return { success: false, message: 'Account was locked!', data: null };
    }
    // check pass sha256(password + PASSWORK_KEY)
    const passToCheck = SHA256(password + PASSWORK_KEY).toString();
    if (passToCheck !== user.password) {
      // luu count sai : DB || file || redis
      // await redis.del(REDIS_KEY.INVALID_PASSWORD + '_' + user.username);
      let count = 0;
      const solansai = +(await redis.get(REDIS_KEY.INVALID_PASSWORD + '_' + user.username));
      if (solansai && solansai > 0) {
        count = solansai;
      }
      await redis.set(REDIS_KEY.INVALID_PASSWORD + '_' + user.username, count + 1);// INVALID_PASSWORD_nguyenvana
      if (count + 1 >= 5) {
        await UserModel.lockUser(user.username); // khoa user
        await redis.del(REDIS_KEY.INVALID_PASSWORD + '_' + user.username); // clear redis cho TH đã bị khóa
        return { success: false, message: 'Account was locked', data: null };
      }
      return { success: false, message: 'Password invalid', data: null };
    }
    await redis.del(REDIS_KEY.INVALID_PASSWORD + '_' + user.username); // clear redis cho TH nhập sai ko liên tiếp
    delete user.password;
    return { success: true, message: 'Success', data: user };
  }
}

module.exports = {
  UserController: new UserController()
}