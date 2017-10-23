const {ObjectID}=require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
/* 
	Todo.remove({}).then((result)=>{
		console.log(result);
	});

	//Todo.findOneAndRemove
	//Todo.findByIdAndRemove


Todo.findOneAndRemove({'_id':'59e547c22daff4891052a602'}).then((todo)=>{

});
*/
Todo.findByIdAndRemove('59e547c22daff4891052a602').then((todo)=>{
	console.log(todo);
}).catch((e)=>{
	console.log(e);
});