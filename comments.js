// Create web server
// 1. npm install express
// 2. node comments.js
// 3. Open browser and go to localhost:3000

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
