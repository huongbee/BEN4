const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const momentTz = require('moment-timezone');

const PostSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  createdAt: {
    type: Date,
    default: new Date()
  },
  images: [String]
});

const PostModel = mongoose.model('Post', PostSchema);
class Post extends PostModel {
  async createPost(idAuthor, content, images) {
    const post = await PostModel.create({
      author: idAuthor,
      content,
      createdAt: momentTz(new Date()).tz('Asia/Ho_Chi_Minh'),
      images
    });
    return post;
  }
};
module.exports = Post;