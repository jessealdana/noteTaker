// Dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App and sets a port
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  app.get("/notes", function(req, res) {
    console.log("hello")
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });

  app.get("/api/notes", function(req, res) {
    fs.readFile(db.json("JSON"));
    res.json();
  });

  app.post("/api/notes", function (req, res) {
    fs.writeFile(path.join(__dirname, "./db/db.json"));
  })

  app.delete("/api/notes/:id", function (req, res) {

  })

  // this is a catch all that will gather everything after it
  app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + 8080);
  });