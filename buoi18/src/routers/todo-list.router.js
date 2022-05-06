const express = require('express');
const router = express.Router();
const { verifyToken } = require('../services/jwt.service');
const { TodoController } = require('../controllers/todo-list.controller');

// http://localhost:3000/todo-list?page=2&key=1399303 // query
// http://localhost:3000/todo-list/2 // params
// http://localhost:3000/todo-list/page/2

router.get('/:page?', async (req, res) => {
  const { accessToken } = req.cookies;
  const checkToken = verifyToken(accessToken);
  const page = +req.params.page || 1;
  console.log({ page });
  const list = await TodoController.getTodoList(checkToken.id, page);
  const totalPage = await TodoController.totalPage(checkToken.id);
  res.render('todo-list/list', { accessToken, list, totalPage, currentPage: page });
});

// router.get('/update', (req, res) => {
//   const { accessToken } = req.params;
//   const checkToken = verifyToken(accessToken);
//   res.render('todo-list/list', { accessToken });
// });
module.exports = router;