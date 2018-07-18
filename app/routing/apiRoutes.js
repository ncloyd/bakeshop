food = require("../data/food");

module.exports = function (app) {
	app.get("/api/food.js", function(req, res) {
		res.json(food);
	});
};