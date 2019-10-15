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
  Todo.deleteMany({}).then(() => {
    Todo.insertMany(todos);
  }).then(() => done())
});

// beforeEach((done) => {
//   Todo.deleteMany({}).then(() => done())
// });

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'this is a new text';
    request(app)
      .post('/todos')
      .send({ text })
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);

      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find({ text }).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      })
  });
})
it('should not create a new todo with empty data', (done) => {

  request(app)
    .post('/todos')
    .send({ text: ' ' })
    .expect(400)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      Todo.find().then((todos) => {
        expect(todos.length).toBe(2);
        done();
      }).catch((e) => done(e));
    })
});

describe('GET /todos/:id', () => {
  it('should return  a valid todo', (done) => {

    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {

        console.log("text", res.body.todo.text)
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  })
})

it('should return  404 if todo not found', (done) => {
  var hexId = new ObjectID().toHexString();
  request(app)
    .get(`/todos/${hexId}.toHexString()}`)
    .expect(404)
    .end(done);
})

it('should return  404 for non-Object id', (done) => {
  var hexId = '123abc';
  request(app)
    .get(`/todos/${hexId}.toHexString()}`)
    .expect(404)
    .end(done);
})



// describe('GET /todos', () => {
//   it('should get all todos', (done) => {
//     request(app)
//       .get('/todos')
//       .expect(200)
//       .expect((res) => {
//         expect(res.body.todo.length).toBe(2);
//       })
//       .end(done);
//   });
// })
