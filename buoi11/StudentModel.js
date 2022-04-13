const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
  name: { type: String },
  avatar: String,
  email: { type: String, unique: true },
  // tags: [String], // ["AAAA", 'BBBB', '.....]
  tags: [{
    id: String,
    value: String,
    _id: false
  }],  // [{id: 1, value: "AAAAA"},{ id: 2, value:"BBBBB"}, {id: 3, value: "AAAAA"},{ id: 4, value:"BBBBB"}]
  class: String
});
const StudentModel = mongoose.model('Student', Student);
Student.index({
  email: { unique: true, sparse: true },
})
module.exports = StudentModel;
