var env = process.env.NODE_ENV || 'development';

//console.log('I am running on', env)
if (env === 'development') {
  process.env.PORT = 5000;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 5000;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoAppTest';
}