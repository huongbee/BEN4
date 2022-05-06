const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller').UserController;
const { signToken, verifyToken } = require('../services/jwt.service');

router.get('/login', (req, res) => {
  res.render('login');
});
router.post('/login', async (req, res, next) => {
  // xu ly login
  const { username, password } = req.body;
  console.log({ username, password });
  const resultLogin = await UserController.login(username, password);
  console.log(resultLogin);

  if (!resultLogin.success) {
    return res.json(resultLogin)
  }
  // tra ve access token ,, go to home
  const user = {
    id: resultLogin.data._id,
    username: resultLogin.data.username,
    fullname: resultLogin.data.fullname,
    avatar: resultLogin.data.avatar
  }
  const token = signToken(user);
  // res.cookie('accessToken', token);
  // next();
  // return res.redirect('/todo-list');
  return res.json({ token })
});
/**
 * Login
 * 1. khóa tk user nếu login sai password quá 5 lần: tạo them field lưu || redis || file
 * 2. kiểm tra user có bị block

 * Quên pass -> kiểm tra tk co bi khoa hay ko => gửi OTP(6 digits random) -> user nhập OTP -> kiểm tra tk co bi khoa hay ko,
 *      => mess: Bạn đã nhập sai OTP quá 5 lần liên tiếp, vui lòng thử lại sau 30p20s hoặc liên hệ bộ phận CSKH để được hỗ trợ!
 *   Gửi lại OTP -> ?s true|false -> không gửi OTP (mess: Vui lòng thử lại sau 30p15s)
 *   Change pass: password === re passs ->
 * Update pass: user logged in: không câp nhật lại giống 2 mk cũ
 * cron job 00:00 scan table users (queue) => check lasted update pass => khóa tài khoản, push noti về client
 */
module.exports = router;