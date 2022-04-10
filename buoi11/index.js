const mongoose = require('mongoose');
const StudentModel = require('./StudentModel');
// mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // console.log("connect success");
  })
  .catch(err => console.log(err));

// const student = new StudentModel();
// student.id = 1;
// student.name = 'Student Name';
// student.save();
// StudentModel.create({ name: 'Nguyen Van Ti', avatar: 'http://example.com/.png' })

// StudentModel.insertMany([
//   { name: 'Nguyen Van A', email: 'a@gmail.com' },
//   { name: 'Nguyen Van B', email: 'b@gmail.com' },
//   { name: 'Nguyen Van C', email: 'c@gmail.com' },
//   { name: 'Nguyen Van D', email: 'd@gmail.com' },
//   { name: 'Nguyen Van E', email: 'e@gmail.com' },
//   { name: 'Nguyen Van F', email: 'f@gmail.com' },
//   { name: 'Nguyen Van G', email: 'g@gmail.com' }
// ])
// find
// SELECT * FROM Student .find() || .find({})
//  WHERE  (email = 'a@gmail.com' AND name LIKE '%A%') OR (1=1 OR 2=2)
// OR
// page 1 = 0,10
// page 2 = 10,20
//
(async () => {
  // const studentA = await StudentModel.find({
  //   email: 'a@gmail.com'
  // });
  const studentA = await StudentModel.find({
    // email: 'a@gmail.com',
    // name: {
    //   $regex: /Van A$/ // LIKE "%Van A"
    // }
    // name: {
    //   $regex: /^Tran[a-zA-Z ]/ // LIKE 'Tran%'
    // }
    // name: {
    //   $regex: /Van/ // LIKE 'Tran%'
    // }
    // $and: [
    //   {
    //     email: 'a@gmail.com', // 1
    //     field: "AAAAA"
    //   },
    //   {
    //     name: { // 9
    //       $regex: /Van/
    //     }
    //   }
    // ]
    // $or: [
    //   {
    //     email: 'admin@gmail.com', // 1
    //   },
    //   {
    //     name: { // 9
    //       $regex: /Van/
    //     }
    //   }
    // ]
    // tags: { $regex: /tag/ } // [String],
    'tags.value': 'tag1'
  })
  //.where('tags').size(1);
  //.skip(2).limit(5)
  // .limit(2);
  console.log(studentA);
})();
// update

// delete