const validator = require('validator');
const mongoose = require('mongoose');

var User = mongoose.model('Users',{
	 email:{
	 	type:String,
	 	required:true,
	 	minlength:1,
	 	trim:true,
	 	unique:true,
	 	validate:{
	 		validator:validator.isEmail,
	 		message:'{VALUE} is not valid email'
	 	}
	 },
	 password:{
	 	type:String,
	 	required:true,
	 	minlength:6,
	 	trim:true
	 },
	 tokens:[{
	 	access:{
	 		type:String,
	 		required:true
	 	},
	 	token:{
	 		type:String,
	 		required:true
	 	}
	 }],
	 
});

module.exports = {User};