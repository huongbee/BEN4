const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.get('/login', (req, res) => {
  res.render('login');
});
router.post('/login', async (req, res) => {
  // xu ly login
  const { username, password } = req.body;
  const resultLogin = await UserController.login(username, password);
  if (!resultLogin.success) {
    return res.render('login', { errorMessage: resultLogin.message });
  }
  // tra ve access token ,, go to home
});

module.exports = router;