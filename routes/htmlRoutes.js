var path = require("path");

var appRouter = (app, fs) => {
    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
  
    // this is a catch all that will gather everything after it
    app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
  }
  module.exports = appRouter;
  