const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const md5 = require('md5');

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: String,
  name: String,
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  receiveRequests: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  sendRequests: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});
const UserModel = mongoose.model('User', UserSchema);

class User extends UserModel {
  #PASS_KEY = 'secret_key';
  // create a new user
  async signUp(email, password, name) {
    const pass = md5(md5(password + this.#PASS_KEY));
    const user = await UserModel.create({ email, password: pass, name });
    return user;
  }
  async signIn(email, password) {
    const user = await UserModel.findOne({ email }).lean();
    if (!user) {
      return { success: false, data: null, message: 'Can not find user' };
    }
    // check pass
    const signInPass = md5(md5(password + this.#PASS_KEY));
    if (signInPass !== user.password) {
      return { success: false, data: null, message: 'Password invalid' };
    }
    const { _id, posts, friends, receiveRequests, sendRequests, name } = user;
    return {
      success: true,
      data: { _id, posts, friends, receiveRequests, sendRequests, email, name },
      message: 'Success'
    };
  }

  async findOne(email) {
    const user = await UserModel.findOne({ email }).lean();
    return user;
  }
  async sendFriendRequest(idSender, idReceiver) {
    // 1 - send request to receiver
    const updateSender = await UserModel.updateOne(
      { _id: idSender },
      {
        $addToSet: { sendRequests: idReceiver }
      }
    );
    console.log(updateSender);
    if (updateSender.nModified === 1) {
      // 2 - receiver receive a request
      const updatereceiver = await UserModel.updateOne(
        { _id: idReceiver },
        {
          $addToSet: { receiveRequests: idSender }
        }
      );
      if (updatereceiver.nModified === 1) return true;
      else {
        // reset sender
        await UserModel.updateOne(
          { _id: idSender },
          {
            $pull: { sendRequests: idReceiver }
          }
        );
      }
    }
    return false;
  }
  async acceptFriendRequest(idSender, idReceiver) {
    // 1 - receiver accept request
    const updateReceiver = await UserModel.updateOne(
      { _id: idReceiver },
      {
        $pull: { receiveRequests: idSender },
        $addToSet: { friends: idSender }
      }
    );
    if (updateReceiver.nModified === 1) {
      // 2 - set friend for sender
      const updateSender = await UserModel.updateOne(
        { _id: idSender },
        {
          $pull: { sendRequests: idReceiver },
          $addToSet: { friends: idReceiver }
        }
      );
      if (updateSender.nModified === 1) return true;
      // reset receiver
      await UserModel.updateOne(
        { _id: idReceiver },
        {
          $addToSet: { receiveRequests: idSender },
          $pull: { friends: idSender }
        }
      );
    }
    return false;
  }
  async refuseFriendRequest(idSender, idReceiver) {
    // 1 - receiver refuse request
    const updateReceiver = await UserModel.updateOne(
      { _id: idReceiver },
      {
        $pull: { receiveRequests: idSender }
      }
    );
    if (updateReceiver.nModified === 1) {
      // 2 - reset for sender
      const updateSender = await UserModel.updateOne(
        { _id: idSender },
        {
          $pull: { sendRequests: idReceiver }
        }
      );
      if (updateSender.nModified === 1) return true;
      // reset receiver
      await UserModel.updateOne(
        { _id: idReceiver },
        {
          $addToSet: { receiveRequests: idSender }
        }
      );
    }
    return false;
  }
  async getFriends(email) {
    const user = await UserModel.findOne({ email }).populate({
      path: 'friends', select: '-password -__v'
    }).select('friends -_id').lean();
    if (user) return user.friends;
    else return [];
  }
}
module.exports = { User, UserModel };
