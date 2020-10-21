const express = require('express');

const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.json(1); // 1 is valid JSON 😆
});

app.listen(port, function() {
    console.log(`Express server is running on port ${port}`);
});