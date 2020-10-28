const express = require('express');

const app = express();
const port = 3000;

app.use(function(req, res, next) {
    console.log("mid test")
    next()
})

app.get('/', function(req, res) {
    res.json("it worked")
})

app.get('/222', function(req, res) {
    res.json("it worked")
})



app.listen(port, function() {
    console.log(`Running on http://localhost:${port}`);
});