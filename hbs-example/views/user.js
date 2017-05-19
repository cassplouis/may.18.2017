var mongoose = require("mongoose");
var user = mongoose.Schema({
	username:String, 
	password:String
	});
	

module.exports = mongoose.model("User", User);