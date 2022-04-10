const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String },
  avatar: String,
  email: { type: String, unique: true }
});
const StudentModel = mongoose.model('Student', Student);
Student.index({
  id: { unique: true },
  email: { unique: true, sparse: true },
  id: 1
})
module.exports = StudentModel;

// 62524ca4fbf019f42fc97903 ObjectId hex: [09abcdef]