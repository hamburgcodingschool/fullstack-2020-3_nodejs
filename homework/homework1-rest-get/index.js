const characters = require("./characters");
const express = require("express");

const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.json(characters);
});

app.get("/character/:id", function (req, res) {
    // DO WHATEVER I WANT TO MY DATABASE OR ANYtHING ELSE IT's MY SERVER AFTER ALL....
});

app.get("/character/:id", function (req, res) {
    const planet = req.query.planet;

    // const filtered = characters.filter(function(currentValue) {
    //   if (currentValue.originPlanet == planet) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });

    // const filtered = characters.filter(function (currentValue) {
        
    //   return currentValue.originPlanet == planet;

    // });

    const filtered = characters.filter(currentValue => currentValue.originPlanet == planet);

    res.json(filtered);
});

app.listen(port, function () {
    console.log(`Example app listening at http://localhost:${port}`);
});

// HOMEWORK:
// create other `get` endpoints that allow the user to:
// get a single character object when querying by `id` (array position)
// get an array of characters when querying by `originPlanet`
// get an array of characters when querying by `species`
