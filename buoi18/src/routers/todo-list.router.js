const express = require('express');
const router = express.Router();
const { verifyToken } = require('../services/jwt.service');
const { TodoController } = require('../controllers/todo-list.controller');

router.get('/', async (req, res) => {
  const { accessToken } = req.cookies;
  const checkToken = verifyToken(accessToken);
  const page = req.query.page || 1;
  const list = await TodoController.getTodoList(checkToken.id, page)
  res.render('todo-list/list', { accessToken, list });
});

// router.get('/update', (req, res) => {
//   const { accessToken } = req.params;
//   const checkToken = verifyToken(accessToken);
//   res.render('todo-list/list', { accessToken });
// });
module.exports = router;