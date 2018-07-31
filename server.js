var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//create an express server
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "app/public")));
app.use(express.static(path.join(__dirname)));

//app.use(express.static("/public"));
//app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});