var path = require("path");
const dataPath = path.join(__dirname, "../db/db.json");
activeNote = require("../db/db.json");


const apiRoutes = (app,fs) => {

    const readFile = (callback, returnJson = true, filePath = dataPath, encoding = "utf8") => {
        fs.readFile(filePath, encoding, (err,data) => {
            if (err) {
                throw err;
            }
            callback(returnJson ? JSON.parse(activeNote) : activeNoteData);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = "utf8") => {
        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }
            callback();
        }); 
    };
    
    app.get("/api/notes", (req, res) => {
        readFile( (activeNote) => {
            res.json(true);
        });   
    });

    app.post("/api/notes", (req, res) => {
        readFile( (activeNote) => {
            res.json(activeNote);
        writeFile(JSON.stringify(activeNote), () => {
                activeNote + id.push(req.body);
                res.json(true);
        });
    },
        true);
    });


//     app.delete("api/notes/" + id, (req, res) => {
//         fs.unlink( (activeNote) => {
//         writeFile(JSON.stringify(activeNote), () => {
//             console.log("complete")
//         });
//     },
//         true);
//     });

 };
module.exports = apiRoutes;