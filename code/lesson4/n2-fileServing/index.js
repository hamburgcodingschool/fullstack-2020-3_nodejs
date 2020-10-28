const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.static('images'));


app.get('/', function(req, res) {
    const fileName = path.resolve(__dirname, 'files/index.html')
    res.sendFile(fileName);
})

app.get('/homer', function(req, res) {
    
    // send file here
    const fileName = path.resolve(__dirname, 'images/homerdonut.jpg')
    res.sendFile(fileName);
})

app.listen(port, function() {
    console.log(`Running on http://localhost:${port}`);
});

// CREATE AN EXPRESS APP THAT SERVES AN IMAGE ON A SPECIFIC ENDPOINT!