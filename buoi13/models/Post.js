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
    ref: 'Comment',
  }],
  createdAt: {
    type: Date,
    default: new Date()
  },
  images: [String]
});

const PostModel = mongoose.model('Post', PostSchema);
class Post {
  async createPost(idAuthor, content, images) {
    const post = await PostModel.create({
      author: idAuthor,
      content,
      createdAt: momentTz(new Date()).tz('Asia/Ho_Chi_Minh'),
      images
    });
    return post;
  }
  async findPostById(id) {
    const post = await PostModel.findOne({ _id: id }).lean();
    return post;
  }
  async addComment(idPost, commentId) {
    const update = await PostModel.updateOne(
      { _id: idPost },
      {
        $addToSet: { comments: commentId }
      }
    );
    return update;
  }
  async removeComment(idPost, commentId) {
    const update = await PostModel.updateOne(
      { _id: idPost },
      {
        $pull: { comments: commentId }
      }
    );
    return update;
  }

  /**
   *
   * @param {*} idPost
   * @param {*} idUser
   * @param {*} action
   * @returns
   */
  async actionLike(idPost, idUser, action) {
    const objUpdate = {};
    if (action === 'like') {
      objUpdate.$addToSet = { likes: idUser };
    } else if (action === 'unlike') {
      objUpdate.$pull = { likes: idUser };
    } else {
      return false;
    }
    const update = await PostModel.updateOne(
      { _id: idPost },
      objUpdate
    );
    return update;
  }
};
module.exports = Post;