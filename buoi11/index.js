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
// { name: 'Nguyen Van A', email: 'a@gmail.com', tags: [{ id: 1, value: "AAAAA" }, { id: 2, value: "BBBBB" }, { id: 3, value: "AAAAA" }, { id: 4, value: "BBBBB" }], class: '10A1' },
// { name: 'Nguyen Van B', email: 'b@gmail.com', tags: [{ id: 1, value: "AAAAA" }, { id: 2, value: "BBBBB" }, { id: 3, value: "AAAAA" }, { id: 4, value: "BBBBB" }], class: '10A1' },
// { name: 'Nguyen Van C', email: 'c@gmail.com', tags: [{ id: 1, value: "AAAAA" }, { id: 2, value: "BBBBB" }, { id: 3, value: "AAAAA" }, { id: 4, value: "BBBBB" }], class: '10A1' },
// { name: 'Nguyen Van D', email: 'd@gmail.com', tags: [{ id: 1, value: "AAAAA" }, { id: 2, value: "BBBBB" }, { id: 3, value: "AAAAA" }, { id: 4, value: "BBBBB" }], class: '10A1' },
// { name: 'Nguyen Van E', email: 'e@gmail.com', tags: [{ id: 1, value: "AAAAA" }, { id: 2, value: "BBBBB" }, { id: 3, value: "AAAAA" }, { id: 4, value: "BBBBB" }], class: '10A2' },
// { name: 'Nguyen Van F', email: 'f@gmail.com', tags: [{ id: 1, value: "AAAAA" }, { id: 2, value: "BBBBB" }, { id: 3, value: "AAAAA" }, { id: 4, value: "BBBBB" }], class: '10A2' },
// { name: 'Nguyen Van G', email: 'g@gmail.com', tags: [{ id: 1, value: "AAAAA" }, { id: 2, value: "BBBBB" }, { id: 3, value: "AAAAA" }, { id: 4, value: "BBBBB" }], class: '10A1' }
// { name: 'Nguyen Van H', email: 'h@gmail.com', tags: [{ id: 1, value: "AAAAA" }, { id: 2, value: "BBBBB" }, { id: 3, value: "AAAAA" }, { id: 4, value: "BBBBB" }], class: '10A1' }
// ]);
// find
// SELECT * FROM Student .find() || .find({})
//  WHERE  (email = 'a@gmail.com' AND name LIKE '%A%') OR (1=1 OR 2=2)
// OR
// page 1 = 0,10
// page 2 = 10,20
// ORDER BY
(async () => {
  // const studentA = await StudentModel.find({
  //   email: 'a@gmail.com'
  // });
  // const studentA = await StudentModel.find({
  //   // email: 'a@gmail.com',
  //   // name: {
  //   //   $regex: /Van A$/ // LIKE "%Van A"
  //   // }
  //   // name: {
  //   //   $regex: /^Tran[a-zA-Z ]/ // LIKE 'Tran%'
  //   // }
  //   // name: {
  //   //   $regex: /Van/ // LIKE 'Tran%'
  //   // }
  //   // $and: [
  //   //   {
  //   //     email: 'a@gmail.com', // 1
  //   //     field: "AAAAA"
  //   //   },
  //   //   {
  //   //     name: { // 9
  //   //       $regex: /Van/
  //   //     }
  //   //   }
  //   // ]
  //   // $or: [
  //   //   {
  //   //     email: 'admin@gmail.com', // 1
  //   //   },
  //   //   {
  //   //     name: { // 9
  //   //       $regex: /Van/
  //   //     }
  //   //   }
  //   // ]
  //   // tags: { $regex: /tag/ } // [String],
  //   'tags.value': { $regex: /tag/ }
  // }).select({ name: 1, tags: 1, _id: 0 })
  //   .sort({ name: -1 })
  // .sort({ name: 'DESC' })
  // .select('name email -_id')
  //.where('tags').size(1);
  //.skip(2).limit(5)
  // .limit(2);
  // console.log(studentA);
  // const student = await StudentModel.aggregate([
  //   {
  //     $match: {
  //       $or: [
  //         {
  //           email: 'admin@gmail.com', // 1
  //         },
  //         {
  //           name: { // 9
  //             $regex: /Van/
  //           }
  //         }
  //       ]
  //     } // where
  //   },
  //   {
  //     $group: {
  //       _id: '$class'
  //     }
  //   },
  //   {
  //     $match: {}, // having
  //   },
  //   {
  //     $project: {
  //       class: '$_id',
  //       _id: 0,
  //       value: '123232'
  //     }
  //   },
  //   { $sort: { name: -1 } },
  // ]);
  // console.log(student);
  // const updateData = await StudentModel.findOneAndUpdate(
  //   { name: "New Name" }, // where
  //   {
  //     name: "old Name",
  //     email: 'new' //data update
  //   },
  //   { new: false }// get new data after ruun update
  // ).lean();
  // console.log(updateData);
  // const update = await StudentModel.updateOne({ name: "Lenin" }, { name: 'Le Van A' })
  // console.log(update);

  // const deleted = await StudentModel.deleteOne({ name: 'Nguyen Van C' });
  // const deleted = await StudentModel.deleteMany(); // remove all
  // console.log(deleted);

  // const updateData = await StudentModel.findOneAndUpdate(
  //   {
  //     name: "Nguyen Van H", // find document
  //     'tags.id': '2' // find item tags[n] in document
  //   }, // where
  //   {
  //     'tags.$.value': "New Tag 2" // set data
  //   },
  //   { new: true }// get new data after ruun update
  // ).lean();
  // const updateData = await StudentModel.findOneAndUpdate(
  //   {
  //     name: "Nguyen Van H", // find document
  //   }, // where
  //   {
  //     $push: { //$addToSet: check exist
  //       tags: { id: '5', value: "Tag 5" }
  //     }
  //   },
  //   { new: true }// get new data after ruun update
  // ).lean();
  // const updateData = await StudentModel.findOneAndUpdate(
  //   {
  //     name: "Nguyen Van H", // find document
  //   }, // where
  //   {
  //     $pull: {
  //       tags: { id: '6', value: "Tag 6" }
  //     }
  //   },
  //   { new: true }// get new data after ruun update
  // ).lean();
  // const updateData = await StudentModel.findOneAndUpdate(
  //   {
  //     name: "Nguyen Van H", // find document
  //   }, // where
  //   {
  //     $pullAll: {
  //       tags: [{ id: '5', value: 'Tag 5' }, { id: '4', value: 'BBBBB' }]
  //     }
  //   },
  //   { new: true }// get new data after ruun update
  // ).lean();
  // console.log(updateData);
})();
// update

// delete



// Message.aggregate(
//   [
//     { "$match": { "to": user } },
//     { "$sort": { "date": 1 } },
//     {
//       "$group": {
//         "_id": "$from"
//       }
//     },
//     {
//       "$lookup": { // lien ket (Message -> users where  Message.from = users. _id) as from
//         "from": "users",
//         "localField": "from",
//         "foreignField": "_id",
//         "as": "from"
//       }
//     },
//     {
//       "$lookup": { //  lien ket (Message -> users where  Message.to = users. _id) as to
//         "from": "users",
//         "localField": "to",
//         "foreignField": "_id",
//         "as": "to"
//       }
//     },
//     { "$unwind": { "path": "$from" } },
//     { "$unwind": { "path": "$to" } }
//   ],
//   function (err, results) {
//     if (err) throw err;
//     return results;
//   }
// )