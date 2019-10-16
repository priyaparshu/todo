var { mongoose } = require('./db/mongoose');
const { ObjectID } = require('mongodb');
const _ = require('lodash')
var { Todo } = require('./models/todo');
var express = require('express');
var bodyParser = require('body-parser');


mongoose.Promise = global.Promise


var app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());


//resource creation
app.get('/todos', (req, res) => {
  Todo.find().then((todo) => {
    res.send({ todo });
  }, (e) => {
    res.status(400).send(e);
  })
})

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({ todo });
  }).catch((e) => {
    res.status(404).send();
  })
})


//update route
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed'])

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  //check if completed exist and is a boolean value

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false
    body.completedAt = null
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({ todo });
  }).catch((e) => {
    res.status(404).send();
  })
})




//delete id
app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findByIdAndDelete(id).then((res) => {
    if (!res) {
      return res.status(404).send();
    }
    res.send({ res });
  }).catch((e) => {
    res.status(404).send();
  })
})

app.post('/todos', (req, res) => {
  console.log(req.body)
  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  })
})




app.listen(port, () => {
  console.log(`listening on port ${port}`)
});

module.exports = { app };