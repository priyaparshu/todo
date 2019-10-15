var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TodoApp', { useNewUrlParser: true }).then(() => {
  console.log('Successfully connected');
}).catch((err) => {
  console.log('Connection failed', err)
})

module.exports = { mongoose }