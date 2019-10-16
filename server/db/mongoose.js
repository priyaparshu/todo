var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => {
  console.log('Successfully connected');
}).catch((err) => {
  console.log('Connection failed', err)
})

module.exports = { mongoose }