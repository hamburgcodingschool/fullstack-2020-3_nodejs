const express = require('express');

const app = express();
const port = 3000;

app.get('/', function(req, res) {

    res.json({
        "status": "ok",
        "description": "it works YAY!"
    });

});

app.get('/people/:id', function(req, res) {

    const id = req.params.id;

    res.json({
        "status": "ok",
        "description": `you chose person ${id}`
    });

});

app.listen(port, function() {
    console.log(`Running on localhost:${port}`);
});