var path = require("path");

module.exports = function(app) {
//GET requests
	app.get("/creations", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/creations.html"));
	});

//default to home if no route exists
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
}; 