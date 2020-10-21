const express = require("express");

const app = express();
const port = 3000;

const myJSONarray = [
    {
        name: "Helder",
        city: "Porto",
        age: 39,
    },
    {
        name: "Joe",
        city: "N.Y.",
        age: 20,
    },
    {
        name: "Maria",
        city: "Madrid",
        age: 55,
    },
];

// HOME ROUTE RETURN ALL RECORDS
app.get("/", function (req, res) {
    res.json(myJSONarray);
});

app.get("/person", function (req, res) {
    const id = req.query.id;
    res.json(myJSONarray[id]);
});

app.listen(port, function () {
    console.log(`Express server is running on port ${port}`);
});
