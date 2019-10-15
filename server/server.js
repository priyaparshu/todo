var { mongoose } = require('./db/mongoose');
const { ObjectID } = require('mongodb');

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