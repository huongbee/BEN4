require('./lib/connectDB');
const moment = require('moment');
const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');
const user = new User();
const post = new Post();
const comment = new Comment();

(async () => {
  // const u = await user.signUp('nguyenvanc@gmail.com', '111111', 'Nguyen Van C');
  // console.log(u);
  const userLogin = await user.signIn('nguyenvana@gmail.com', '111111');
  console.log(userLogin);
  if (userLogin.success) {
    // find user nguyenvanb
    const userB = await user.findOne('nguyenvanb@gmail.com');
    if (userB) {
      console.log({ userB });

      const result = await user.sendFriendRequest(userLogin.data._id, userB._id);
      console.log(result);
    } else {
      console.log("Khong tim thay user B");
    }
    // find post co id 625b8d089a33161b3f663201 do client gui len
    // const postId = '625b8d089a33161b3f663201'; //
    // const postInfo = await post.findPostById(postId);
    // console.log(postInfo);
    // const actionLike = await post.actionLike(postInfo._id, userLogin.data._id, 'like');
    // const newComment = await comment.createComment(
    //   userLogin.data._id,
    //   postInfo._id,
    //   `${userLogin.data.name} da binh luan tren bai post cua user C lan 2`
    // );
    // console.log(actionLike);
  } else {
    console.log('Login fail! ', userLogin);
  }

})();