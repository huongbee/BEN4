const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/relation', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected'))