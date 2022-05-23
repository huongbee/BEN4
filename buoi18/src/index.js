require('./services/dbConnect.service');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const userRouter = require('./routers/user.router');
const todoListRouter = require('./routers/todo-list.router');
const RedisService = require('./services/redis.service');
const sendMail = require('./services/sendMail.service');
const ejs = require('ejs');
const fs = require('fs');
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express.static('src/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var compiled = ejs.compile(fs.readFileSync(__dirname + '/views/test-mail.ejs', 'utf8'));
var html = compiled({ name: 'NodeJS' });
sendMail('huongnguyenak96@gmail.com', 'Test', html);

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

const redis = new RedisService();
(async () => {
  // const result = await redis.set('keyTest', JSON.stringify({ name: 'Kmin', age: 2 }));
  // console.log(result);
  // const result = await redis.del('keyTest');
  // console.log(result);
  // const result = await redis.get('keyTest');
  // console.log(JSON.parse(result));

})()
