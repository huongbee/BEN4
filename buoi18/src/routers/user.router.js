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
    return res.render('login', { errorMessage: resultLogin.message });
  }
  // tra ve access token ,, go to home
  const user = {
    id: resultLogin.data._id,
    username: resultLogin.data.username,
    fullname: resultLogin.data.fullname,
    avatar: resultLogin.data.avatar
  }
  const token = signToken(user);
  res.cookie('accessToken', token);
  next();
  return res.redirect('/todo-list');
});

module.exports = router;