

let promise1 = new Promise(function(resolve, reject) {
    
    // some code that takes some time...
    // after which this promise will resolve...

    resolve(5); // resolve is for Promise as return is for function
    // reject();
});

promise1.then(function(data) {
    console.log("I GUESS THE PROMISE WAS FINISHED...")
    console.log(data);
}).catch(function(error) {

});




