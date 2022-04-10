const mongoose = require('mongoose');
const StudentModel = require('./StudentModel');
// mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connect success");
  })
  .catch(err => console.log(err));

// const student = new StudentModel();
// student.id = 1;
// student.name = 'Student Name';
// student.save();
StudentModel.create({ id: 1, name: 'Nguyen Van Ti', avatar: 'http://example.com/.png' })

StudentModel.insertMany([
  { id: 1, name: 'Nguyen Van Ti' },
  { id: 2, name: 'Nguyen Van Teo' }
])