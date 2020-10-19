const fs = require('fs');



const lukeFile = fs.readFileSync('./luke.json');

console.log(lukeFile);

// const test = JSON.parse(`{"hello": "heee", "sd": [23, 23, 1, 2, 2]}`);

const lukeObject = JSON.parse(lukeFile);

console.log(`${lukeObject.name} has ${lukeObject.eye_color} eyes`);
