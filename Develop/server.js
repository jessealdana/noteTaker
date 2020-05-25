// Dependencies
var express = require("express");

var fs = require("fs");
var apiRoutes = require("./routes/apiRoutes.js");
var htmlRoutes = require("./routes/htmlRoutes.js");

// Sets up the Express App and sets a port
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

apiRoutes(app, fs);
htmlRoutes(app, fs);


app.listen(PORT, function() {
  console.log("App listening on PORT " + 8080);
});