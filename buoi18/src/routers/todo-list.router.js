const express = require('express');
const router = express.Router();
const { verifyToken } = require('../services/jwt.service');
const { TodoController } = require('../controllers/todo-list.controller');
const { validatePage, authenticate } = require('../middleware/validate');

// http://localhost:3000/todo-list?page=2&key=1399303 // query
// http://localhost:3000/todo-list/2 // params
// http://localhost:3000/todo-list/page/2

router.get('', async (req, res) => {
  return res.render('todo-list/list');
});

router.get('/list/:page?', validatePage, authenticate, async (req, res) => {
  const { accesstoken } = req.headers;
  if (!accesstoken) {
    return res.render('login');
  }
  let checkToken = null;
  try {
    checkToken = verifyToken(accesstoken);
  } catch (error) {
    return res.json({ success: false, message: 'Login again' });
  }
  console.log({ checkToken });

  // neu token het han

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