var path = require("path");
const dataPath = path.join(__dirname, "../db/db.json");
const newNote = require("../public/assets/js/index.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = (app,fs) => {

    const readFile = (callback, returnJson = true, filePath = dataPath, encoding = "utf8") => {
        fs.readFile(filePath, encoding, (err,data) => {
            if (err) {
                throw err;
            }
            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData = newNote, callback, filePath = dataPath, encoding = "utf8") => {
        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }
            callback();
        }); 
    };
    
    app.get("/api/notes", (req, res) => {
            res.json(newNote);
        });   
 
    app.post("/api/notes", (req, res) => {
           var newNote = req.body;
           readFile(newNote, (req, res) => {
                writeFile(newNote, (req, res) => {
                    activeNote.push(newNote.JSONstringify())
                    res.json(newNote);
            });
        });
    });

    app.delete("api/notes/" + id, (req, res) => {       
        fs.unlink( (activeNote) => {

            console.log("complete")
        });
    },
        true);


 };
module.exports = apiRoutes;