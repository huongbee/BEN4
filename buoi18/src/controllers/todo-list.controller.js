const { Todo } = require('../models/todo-list.model');
const limit = 5;
class TodoController {
  async getTodoList(userId, page = 1) {
    page = page >= 1 ? page : 1; // start >= 0
    const start = (page - 1) * limit;
    const list = await Todo.findByUserId(userId, start, limit);
    return list;
  }
  async totalPage(userId) {
    const count = await Todo.countByUserId(userId);
    const totalPage = Math.ceil(count / limit);
    return totalPage;
  }
}

module.exports = { TodoController: new TodoController() }