const { Todo } = require('../models/todo-list.model');

class TodoController {
  async getTodoList(userId, page = 1) {
    page = page >= 1 ? page : 1; // start >= 0
    const limit = 5;
    const start = (page - 1) * limit;
    const list = await Todo.findByUserId(userId, start, limit);
    return list;
  }
}

module.exports = { TodoController: new TodoController() }