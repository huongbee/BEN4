require('./lib/connectDB');
const moment = require('moment');
const User = require('./models/User');
const Post = require('./models/Post');

(async () => {
  const user = new User();
  // const u = await user.signUp('nguyenvanc@gmail.com', '111111', 'Nguyen Van C');
  // console.log(u);
  // const userLogin = await user.signIn('nguyenvanb@gmail.com', '111111');
  // console.log(userLogin);
  // if (userLogin.success) {
  //   const post = new Post();
  //   const newPost = await post.createPost(
  //     userLogin.data._id,
  //     'User B vua tao bai post so 2',
  //     []
  //   );
  //   console.log(`User ${userLogin.data.name} da tao thanh cong bai viet voi noi dung la ${newPost.content} luc ${moment(newPost.createdAt).format('HH:mm:ss DD/MM/YYYY')}`);
  // } else {
  //   console.log('Login fail! ', userLogin);
  // }

})();