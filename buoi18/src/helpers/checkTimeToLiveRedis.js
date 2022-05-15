const RedisService = require('../services/redis.service');
const { REDIS_KEY } = require('../constants/common.constant');

module.exports = async (username) => {
  const redis = new RedisService();
  // const checkTimeToLive = await redis.get(REDIS_KEY.LOCK_VERIRY_OTP + username);
  const timeToLive = await redis.getTTL(REDIS_KEY.LOCK_VERIRY_OTP + username);
  console.log({ timeToLive });
  if (timeToLive && timeToLive > 0) {
    const mins = Math.floor(timeToLive / 60); // 22,56 => 22
    const seconds = timeToLive - (mins * 60);
    return { success: false, message: `Bạn đã nhập sai OTP quá 5 lần liên tiếp, vui lòng thử lại sau ${mins}m${seconds}s hoặc liên hệ bộ phận CSKH để được hỗ trợ!`, data: null };
  }
  return { success: true, message: 'Success' };
}