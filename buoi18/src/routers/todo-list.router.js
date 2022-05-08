const express = require('express');
const router = express.Router();
const { verifyToken } = require('../services/jwt.service');
const { TodoController } = require('../controllers/todo-list.controller');
const { validatePage } = require('../middleware/validate');

// http://localhost:3000/todo-list?page=2&key=1399303 // query
// http://localhost:3000/todo-list/2 // params
// http://localhost:3000/todo-list/page/2

router.get('', async (req, res) => {
  return res.render('todo-list/list');
});

router.get('/list/:page?', validatePage, async (req, res) => {
  const { accesstoken } = req.headers;
  if (!accesstoken) {
    return res.render('login');
  }
  const checkToken = verifyToken(accesstoken);
  const page = +req.params.page || 1;
  console.log({ page });
  const list = await TodoController.getTodoList(checkToken.id, page);
  const totalPage = await TodoController.totalPage(checkToken.id);
  return res.render('todo-list/detail', { list, totalPage, currentPage: page });
});
// router.get('/update', (req, res) => {
//   const { accesstoken } = req.params;
//   const checkToken = verifyToken(accesstoken);
//   res.render('todo-list/list', { accesstoken });
// });
module.exports = router;