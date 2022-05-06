const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const TodoSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  content: String,
  createdAt: {
    type: Date,
    default: new Date
  },
  updatedAt: {
    type: Date
  },
  startAt: {
    type: Date
  },
  finishAt: {
    type: Date
  },
});
const TodoModel = mongoose.model('todo', TodoSchema);

class Todo {
  async findByUserId(_id, start = 0, limit = 10) {
    const list = await TodoModel.find({ userId: _id }).skip(start).limit(limit).select('-__v').lean();
    return list;
  }
  async countByUserId(_id) {
    const count = await TodoModel.find({ userId: _id }).countDocuments();
    return count;
  }
}
// limit = 10
// page = 1 => 0,10 => start = (page-1)*limit, limit = 10
// page = 2 => 10,10
// page = 3 => 20,10
// data 30/4/2022 7:30 10:30
// (async () => {
//   const startAt = moment('6/05/2022 7:30:00', 'DD/MM/YYYY hh:mm:ss').toISOString();
//   console.log(startAt);

//   await TodoModel.insertMany([
//     {
//       userId: '6264db76a4b2d0e1d43e8028',
//       title: 'Viec can lam thu ' + Math.round(Math.random() * 100),
//       content: 'Di hoc',
//       createdAt: new Date(),
//       startAt,
//       finishAt: moment(startAt).add(3, 'hours').toISOString()
//     },
//     {
//       userId: '6264db76a4b2d0e1d43e8028',
//       title: 'Viec can lam thu ' + Math.round(Math.random() * 100),
//       content: 'Di an trua',
//       createdAt: new Date(),
//       startAt,
//       finishAt: moment(startAt).add(3, 'hours').toISOString()
//     },
//     {
//       userId: '6264db76a4b2d0e1d43e8028',
//       title: 'Viec can lam thu ' + Math.round(Math.random() * 100),
//       content: 'Di ngu trua',
//       createdAt: new Date(),
//       startAt,
//       finishAt: moment(startAt).add(3, 'hours').toISOString()
//     },
//     {
//       userId: '6264db76a4b2d0e1d43e8028',
//       title: 'Viec can lam thu ' + Math.round(Math.random() * 100),
//       content: 'Di lam',
//       createdAt: new Date(),
//       startAt,
//       finishAt: moment(startAt).add(3, 'hours').toISOString()
//     },
//     {
//       userId: '6264db76a4b2d0e1d43e8028',
//       title: 'Viec can lam thu ' + Math.round(Math.random() * 100),
//       content: 'An toi',
//       createdAt: new Date(),
//       startAt,
//       finishAt: moment(startAt).add(3, 'hours').toISOString()
//     },
//     {
//       userId: '6264db76a4b2d0e1d43e8028',
//       title: 'Viec can lam thu ' + Math.round(Math.random()),
//       content: 'Di cf',
//       createdAt: new Date(),
//       startAt,
//       finishAt: moment(startAt).add(3, 'hours').toISOString()
//     }
//   ]);
// })()

module.exports = { Todo: new Todo() };