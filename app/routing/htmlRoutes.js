var path = require("path");

module.exports = function(app) {
//GET requests
	//cupcakes page
	app.get("/cupcakes", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/cupcakes.html"));
	});
	//cakes page
	app.get("/cakes", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/cakes.html"));
	});
	//cookies page
	app.get("/cookies", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/cookies.html"));
	});

//default to home if no route exists
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
}; 