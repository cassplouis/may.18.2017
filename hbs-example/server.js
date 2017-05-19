var express = require("express"), 
	bodyParser = require("body-parser"), 
	mongoose = require("mongoose"),
	hbs = require("hbs"),
	app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set()="view engine", "hbs"

app.get("/", function(req,res){

})

app.listen(8080, function(){
	console.log("server is running");
)};