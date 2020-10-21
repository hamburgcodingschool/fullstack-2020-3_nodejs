const characters = require('./characters');
const express = require('express');

const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.json(characters);
});

app.listen(port, function() {
  console.log(`Example app listening at http://localhost:${port}`);
});

// HOMEWORK:
// create other `get` endpoints that allow the user to:
// get a single character object when querying by `id` (array position)
// get an array of characters when querying by `originPlanet`
// get an array of characters when querying by `species`