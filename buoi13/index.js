require('./lib/connectDB');
const moment = require('moment');
const User = require('./models/User').User;
const Post = require('./models/Post');
const Comment = require('./models/Comment');
const user = new User();
const post = new Post();
const comment = new Comment();

(async () => {
  // const u = await user.signUp('nguyenvanc@gmail.com', '111111', 'Nguyen Van C');
  // console.log(u);
  // const userLogin = await user.signIn('nguyenvanb@gmail.com', '111111');
  // console.log(userLogin);
  // if (userLogin.success) {
  //   // tao lai post
  //   await post.createPost(userLogin.data._id, 'User B vua tao bai viet so 1', []);
  //   await post.createPost(userLogin.data._id, 'User B vua tao bai viet so 2', []);

  //   // find user nguyenvana
  //   const userA = await user.findOne('nguyenvana@gmail.com');
  //   if (userA) {
  //     console.log({ userA });

  //     const result = await user.acceptFriendRequest(userA._id, userLogin.data._id);
  //     console.log(result);
  //   } else {
  //     console.log("Khong tim thay user A");
  //   }
  //   // find post co id 625b8d089a33161b3f663201 do client gui len
  //   // const postId = '625b8d089a33161b3f663201'; //
  //   // const postInfo = await post.findPostById(postId);
  //   // console.log(postInfo);
  //   // const actionLike = await post.actionLike(postInfo._id, userLogin.data._id, 'like');
  //   // const newComment = await comment.createComment(
  //   //   userLogin.data._id,
  //   //   postInfo._id,
  //   //   `${userLogin.data.name} da binh luan tren bai post cua user C lan 2`
  //   // );
  //   // console.log(actionLike);
  // } else {
  //   console.log('Login fail! ', userLogin);
  // }
  // Liệt kê các bài đăng của user có email 'nguyenvana@gmail.com'
  const posts = await post.getPostsByAuthor('nguyenvana@gmail.com'); // [{}]
  console.log(posts);


})();