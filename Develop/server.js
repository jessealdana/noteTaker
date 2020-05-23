// Dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");
var routes = require("./public/assets/js/users.js")(app,fs);

// Sets up the Express App and sets a port
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var appRouter = (app, fs) => {
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });

  // this is a catch all that will gather everything after it
  app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + 8080);
  });

  userRoutes(app, fs);
}
module.exports = appRouter;