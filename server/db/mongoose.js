var mongoose = require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://sdb_dev:Carmen123@ds121535.mlab.com:21535/todo_api' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};