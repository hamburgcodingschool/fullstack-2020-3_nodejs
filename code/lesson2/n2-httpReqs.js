const http = require('http');

http.createServer(function(req, res) {

    console.log(req.url);

    if (req.url == '/') {
        res.write('Welcome to my awesome webpage!');
    } else if (req.url == '/gallery') {
        res.write('A gallery was supposed to be here but I am to lazy...');
    } else {
        res.write('Page not found!');
    }

    res.end();
}).listen(3000);