require('./lib/connectDB');
const User = require('./models/User');

(async () => {
  const user = new User();
  // const u = await user.signUp('nguyenvanc@gmail.com', '111111', 'Nguyen Van C');
  // console.log(u);
  const u = await user.signIn('nguyenvanc@gmail.com', '111111');
  console.log(u);
})();