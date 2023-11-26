// create web server
// start server: node comments.js
// test in browser: http://localhost:8080/comments

var http = require('http');
var fs = require('fs');

// create server
http.createServer(function (req, res) {

    // open and read in htm file
    fs.readFile('comments.htm', function(err, data) {

        // write HTTP header
        res.writeHead(200, {'Content-Type': 'text/html'});

        // write data to body of response
        res.write(data);

        // end response
        res.end();
    });

}).listen(8080); // listen on port 8080

// console will print message
console.log('Server running at http://
