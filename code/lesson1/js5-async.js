const fs = require('fs');


fs.readFile('./luke.json', function (err, data) {
    console.log("do something With data");
    console.log(err);
    console.log(data);
    console.log('FINISHED');
});

console.log('HI');
