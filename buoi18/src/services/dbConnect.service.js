const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected'))
