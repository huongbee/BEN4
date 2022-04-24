const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const momentTz = require('moment-timezone');
const UserModel = require('./User').UserModel;

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
    await UserModel.updateOne(
      { _id: idAuthor },
      {
        $addToSet: { posts: post._id }
      })
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
  async getPostsByAuthor(emailAuthor) {
    const posts = await UserModel.findOne({ email: emailAuthor }).populate({
      path: 'posts',
      select: 'content createdAt -_id',
      match: {
        _id: { $ne: '625d64232adc9a0be11e9c0d' } // !=   === not equals  $gte $lte $gt $lt
      }
    }).exec();
    return posts;
  }
  async getPostInfo(idPost) {
    const post = await PostModel.findOne({ _id: idPost })
      .populate('author', 'name -_id')
      .populate({
        path: 'comments',
        populate: { path: 'author', select: 'name -_id' }
      });
    return post;
  }
};
module.exports = Post;