const fetch = require('node-fetch');

const fetchPromise = fetch('https://swapi.dev/api/people/25');

fetchPromise.then(function(res) {
    // console.log(res);
    const jsonPromise = res.json();
    
    jsonPromise.then(function (json) {
        console.log('FINALLY');
        console.log(`${json.name} has ${json.eye_color} eyes`);
    });
}).catch(function(error) {
    console.log("DIDn't work but I don't much care!");
});

console.log('IMMEDIATE!');