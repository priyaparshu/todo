const { ObjectID } = require('mongodb')
const request = require('supertest');
const expect = require('expect');
const { app } = require('../server');
const { Todo } = require('../models/todo');

const todos = [{
  _id: new ObjectID(),
  text: "Work out"
}, {
  text: "Organize room",
}];

beforeEach((done) => {
  Todo.remove({}).then(() => done())
  Todo.insertMany(todos)
});


describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'lets text this';
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
        Todo.find().then((todos) => {
          console.log(todos);
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      })
  });
});

describe('GET /todos/:id', () => {
  it('should return  a valid todo', (done) => {

    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todo[0].text);
      })
      .end(done);
  })
})