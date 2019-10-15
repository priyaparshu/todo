const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

// var id = '5da5ecef49b501075370dae0';
// if (ObjectID.isValid(id)) {
//   console.log('Id is valid')
// }
// // Todo.findOne({
// //   _id: id
// // }).then((res) => { console.log(res) })

// Todo.findById({
//   _id: id
// }).then((res) => {
//   if (!res) {
//     console.log("Id not found")
//   }
//   if (ObjectID.isValid(id)) {
//     console.log('Id is valid')
//   }
//   console.log("Id", res)
// }).catch((e) => console.log(e))


