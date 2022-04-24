const express = require('express');
const app = express();
const userRouter = require('./routers/user.router');
const todoListRouter = require('./routers/todo-list.router');

app.get('/', (req, res) => {
  if (0) { // da login
    console.log("Login successful");
    return 1;
  }
  return res.redirect('user/login');
});

app.use('/user', userRouter); // user/login
app.use('/todo-list', todoListRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
})