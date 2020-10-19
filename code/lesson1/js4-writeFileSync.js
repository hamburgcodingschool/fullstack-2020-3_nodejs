// CREATE A PROGRAM THAT WRITES A NEW FILE CALLED `numbers.txt`
// THE FILE HAS ALL THE NUMBERS FROM 1 to 5000
// 1 NUMBER PER LINE

const fs = require('fs');

let numbersTxt = '';
for (let i = 1; i <= 5000; i++) {
    if (i > 1) {
        numbersTxt += '\n';    
    }
    numbersTxt += i;
}

fs.writeFileSync('./numbers.txt', numbersTxt);
