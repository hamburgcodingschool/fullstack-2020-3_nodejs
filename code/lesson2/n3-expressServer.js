const express = require('express');

const app = express();
const port = 3000;

const myJSONObj = {
    name: "Helder",
    city: "Porto",
    age: 39
}

app.get('/', function(req, res) {
    res.json(myJSONObj);
});

app.get('/handleIt', function(req, res) {

    // console.log(req.query.name);

    res.json(req.query.name);
});

app.listen(port, function() {
    console.log(`Express server is running on port ${port}`);
});


// CREATE A B.E. RESP API
// CREATE A F.E. PAGE THAT REQUESTS THAT API WITH `fetch`