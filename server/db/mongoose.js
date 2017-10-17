var mongoose = require('mongoose');

mongoose.Promise=global.Promise;
var db = {
	localhost:'mongodb://localhost:27017/TodoApp',
	mlab:'mongodb://sdb_dev:Carmen123@ds121535.mlab.com:21535/todo_api'
}
mongoose.connect(process.env.PORT ? db.mlab : db.localhost);
module.exports = {mongoose};