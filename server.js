var express = require("express"), 
	bodyParser = require("body-parser"), 
	mongoose = require("mongoose"),
	hbs = require("hbs"),
	app = express(),
	user = require("./user")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true
}));

app.set("view engine", "hbs");

app.get("/", function(req,res){
	res.render("home")
});



app.post("/login", function(req,res){
	USer.findOne({"username": req.body.username}, function(err, user){
		if(err){
			console.log(err);
		} else {
			someUser = user;
			someUser= user;
			res.redirect("/data");
		}
	});
});

app.get("/signup", function(req,res){
	new User({
		username: req.body.username,
		password: req.body.password
	}).save(function(err){
		if(err){
			console.log(err);
		} else {
			res.redirect("login");
		}
	});
});

app.get("/data", function(req,res){
	res.render("data", {
		user: someUser
	});
});

	res.render("signup")
};

mongoose.connect("mongodb://localhost/user");
app.listen(8080;
console.log("server is running")
