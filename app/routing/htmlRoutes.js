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

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
}; 