const SHA256 = require("crypto-js/sha256");
const UserModel = require('../models/user.model').User;
const { PASSWORK_KEY, REDIS_KEY } = require('../constants/common.constant');
const RedisService = require('../services/redis.service');
const redis = new RedisService();
const checkTimeToLiveRedis = require('../helpers/checkTimeToLiveRedis');
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
  async forgetPassword(username) {
    // find the user
    const user = await UserModel.findUserByUsername(username);
    if (!user) {
      return { success: false, message: 'Can not find user', data: null };
    }
    if (user.isLocked) {
      return { success: false, message: 'Account was locked', data: null };
    }
    // kiem tra user co bi lock gui OTP hay khong
    const check = await checkTimeToLiveRedis(user.username);
    if (!check.success) return check;
    // generate OTP
    // let otp = Math.round(Math.random() * 100000);
    // // them vao truoc/sau OTP nhung 0 sao cho otp đủ 6 chữ số
    let otp = Math.random().toString().substr(2, 6); // 0.13103029394
    console.log({ otp });
    // luu OTP vao redis hoac DB (type: FORGET_PASSWORD)
    await redis.set(REDIS_KEY.FORGET_PASSWORD_OTP + '_' + user.username, otp, 2 * 60);
    // TODO gui OTP ve cho user
    // return ket qua
    return { success: true, message: 'Success', data: { username: user.username, _id: user._id } };
  }
  async verifyOTP(username, OTP) {
    // find the user
    const user = await UserModel.findUserByUsername(username);
    if (!user) {
      return { success: false, message: 'Can not find user', data: null };
    }
    // kiem tra user co bi lock gui OTP hay khong
    const check = await checkTimeToLiveRedis(user.username);
    if (!check.success) return check;
    const otp = await redis.get(REDIS_KEY.FORGET_PASSWORD_OTP + '_' + user.username);
    console.log('verifyOTP otp = ' + otp);
    if (otp && otp == OTP) {
      await redis.del(REDIS_KEY.LOCK_VERIRY_OTP + user.username); // xoa lock nhap sai
      await redis.del(REDIS_KEY.FORGET_PASSWORD_OTP + '_' + user.username);// xoa otp
      return { success: true, message: 'Success', data: null };
    }
    // check so lan nhap sai
    let count = +(await redis.get(REDIS_KEY.LOCK_VERIRY_OTP + user.username)) || 0;
    if (count + 1 >= 5) {
      // lock voi thoi gian 30
      await redis.set(REDIS_KEY.LOCK_VERIRY_OTP + user.username, 'true', 30 * 60);
    } else {
      // lock ko co thoi gian
      await redis.set(REDIS_KEY.LOCK_VERIRY_OTP + user.username, count + 1);
    }
    if (!otp) {
      // check so lan nhap sai (viet function xu ly o helpers)
      return { success: false, message: 'OTP expired or not exist', data: null };
    }
    if (otp !== OTP) {
      // check so lan nhap sai (viet function xu ly o helpers)
      return { success: false, message: 'OTP invalid', data: null };
    }
  }
  async updatePassword(username, password) {
    const user = await UserModel.findUserByUsername(username);
    if (!user) {
      return { success: false, message: 'Can not find user', data: null };
    }
    const pass = SHA256(password + PASSWORK_KEY).toString();
    const update = await UserModel.updatePassword(user, pass);
    if (update.modifiedCount !== 1) {
      return { success: false, message: 'Update fail', data: null };
    }
    return { success: true, message: 'Success', data: { username: user.username, _id: user._id } };
  }
}

module.exports = {
  UserController: new UserController()
}