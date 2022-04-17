const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const momentTz = require('moment-timezone');
const Post = require('./Post');
const post = new Post();

const CommentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const CommentModel = mongoose.model('Comment', CommentSchema);
class Comment extends CommentModel {
  async createComment(idAuthor, idPost, content) {
    const comment = await CommentModel.create({
      author: idAuthor,
      post: idPost,
      content,
      createdAt: momentTz(new Date()).tz('Asia/Ho_Chi_Minh')
    });
    if (comment && comment._id) {
      await post.addComment(idPost, comment._id);
    }
    return comment;
  }
};
module.exports = Comment;