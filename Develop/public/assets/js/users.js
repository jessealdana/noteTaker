const userRoutes = (app,fs) => {

    const dataPath = "/api/notes";

const readFile = (callback, returnJson = false, filePath = dataPath, encoding = "utf8") => {
    fs.readFile(filePath, encoding, (err,data) => {
        if (err) {
            throw err;
        }
        callback(returnJson ? JSON.parse(data) : data);
    });
};

const writeFile = (filedData, callback, filePath = dataPath, encoding = "utf8") => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
        if (err) {
            throw err;
        }
        callback();
    }); 
};
    
    app.get(dataPath, function(req, res) {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
    });   
});

app.post(dataPath, function (req, res) {

    readFile(data => {
        const newNoteId = Object.keys(data).length + 1;
        data[newNoteId] = JSON.parse(req.body.data);
        writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send("new note added");
        });
    },
        true);
  });

app.put('/api/notes/:id', (req, res) => {

    readFile(data => {

        const noteId = req.params["id"];
        data[noteId] = JSON.parse(req.body.data);

        writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send(`note id:${noteId} updated`);
        });
    },
        true);
});

app.delete('/api/notes/:id', (req, res) => {

    readFile(data => {

        const noteId = req.params["id"];
        delete data[noteId];

        writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send(`note id:${noteId} removed`);
        });
    },
        true);
});

};
module.exports = userRoutes;