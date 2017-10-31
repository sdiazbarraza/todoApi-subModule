const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt =  require('jsonwebtoken');

const userOneid= new ObjectID();
const userTwoid= new ObjectID();
const users= [{
	_id:userOneid,
	email: 'test@123.cl',
	password : 'user1pass',
	tokens : [{
		access:'auth',
		token :jwt.sign({_id:userOneid,access:'auth'},'abc123').toString(),
	}]
	},{
	   _id: userTwoid,
		email:'test@1234.cl',
		password:'user2pass',
		tokens : [{
			access:'auth',
			token :jwt.sign({_id:userTwoid,access:'auth'},'abc123').toString(),
		}]
	  }
	];
const todos= [{
	_id:new ObjectID(),
	text:'First test todo',
	_creator:userOneid
	},{
		_id: new ObjectID(),
		text : 'Second test todo',
		completed: true,
		completedAt:333,
		_creator:userTwoid
	}];

const populateTodos = (done)=>{
	Todo.remove().then(()=>{
		return Todo.insertMany(todos);
	}).then(()=>done());
};
const populateUsers = (done)=>{
	User.remove().then(()=>{
		var userOne = new User(users[0]).save();
		var userTwo = new User(users[1]).save();
		return Promise.all([userOne,userTwo])
	}).then(()=>done());
};
module.exports = {
	todos,populateTodos,users,populateUsers
};