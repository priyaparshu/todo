const { ObjectID } = require('mongodb')
const request = require('supertest');
const expect = require('expect');
const { app } = require('../server');
const { Todo } = require('../models/todo');

const todos = [{
  _id: new ObjectID(),
  text: "Work out"
}, {
  _id: new ObjectID(),
  text: "Organize room",
}];
beforeEach((done) => {
  Todo.remove({}).then(() => {
    Todo.insertMany(todos);
  }).then(() => done())
});



describe('DELETE /todos/:id', () => {

  it('should remove a todo', (done) => {
    var hexId = todos[0]._id.toHexString()


    console.log(hexId)
    //.delete(`/todos/${hexId}`)
    request(app)
      .delete(`/todos/${hexId}`)
      .expect(200, done)
    // .expect((res) => {
    //   console.log("i---", res.body.todo._id)
    //   console.log("i++++", hexId)
    //   //expect(res.body.todo._id).toBe(hexId);
    // })
    // .end((err, res) => {
    //   if (err) {
    //     //console.log('eerr', err)
    //     return done(err);
    //   }
    //console.log("res", res.body.text)
    // Todo.findById(hexId).then((todo) => {
    //   //console.log("result", todo.id)
    //   //expect(todo).toNotExist();
    //   done();
    // }).catch((e) => {
    //   //console.log('e', e)
    //   done(e)
    // });
  })
})
it('should return 404 if todo not found', (done) => {
  var hexId = '123';
  request(app)
    .delete(`/todos/${hexId}.toHexString()}`)
    .expect(404)
    .end(done);
})
it('should return 404 if object id is invalid', (done) => {
  var hexId = new ObjectID().toHexString();
  request(app)
    .delete(`/todos/${hexId}.toHexString()}`)
    .expect(404)
    .end(done);
})



// beforeEach((done) => {
//   Todo.deleteMany({}).then(() => done())
// });

// describe('POST /todos', () => {
//   it('should create a new todo', (done) => {
//     var text = 'this is a new text';
//     request(app)
//       .post('/todos')
//       .send({ text })
//       .expect(200)
//       .expect((res) => {
//         expect(res.body.text).toBe(text);

//       })
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//         Todo.find({ text }).then((todos) => {
//           expect(todos.length).toBe(1);
//           expect(todos[0].text).toBe(text);
//           done();
//         }).catch((e) => done(e));
//       })
//   });
// })
// it('should not create a new todo with empty data', (done) => {

//   request(app)
//     .post('/todos')
//     .send({ text: ' ' })
//     .expect(400)
//     .end((err, res) => {
//       if (err) {
//         return done(err);
//       }
//       Todo.find().then((todos) => {
//         expect(todos.length).toBe(2);
//         done();
//       }).catch((e) => done(e));
//     })
// });

// describe('GET /todos/:id', () => {
//   it('should return  a valid todo', (done) => {

//     request(app)
//       .get(`/todos/${todos[0]._id.toHexString()}`)
//       .expect(200)
//       .expect((res) => {

//         console.log("text", res.body.todo.text)
//         expect(res.body.todo.text).toBe(todos[0].text);
//       })
//       .end(done);
//   })
// })



// it('should return  404 if todo not found', (done) => {
//   var hexId = new ObjectID().toHexString();
//   request(app)
//     .get(`/todos/${hexId}.toHexString()}`)
//     .expect(404)
//     .end(done);
// })

// it('should return  404 for non-Object id', (done) => {
//   var hexId = '123abc';
//   request(app)
//     .get(`/todos/${hexId}.toHexString()}`)
//     .expect(404)
//     .end(done);


// })



describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        //console.log(res)
        expect(res.body.todo.length).toBe(2);
      })
      .end(done);
  });
})


