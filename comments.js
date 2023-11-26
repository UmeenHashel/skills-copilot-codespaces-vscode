// create web server

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');

// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire function
app.listen(3000);
console.log('You are listening to port 3000');

// get request
app.get('/', function(req, res){
  res.render('index');
});

// post request
app.post('/', urlencodedParser, function(req, res){
  // get data from the view and add it to mongodb
  var newComment = req.body;
  console.log(newComment);
  fs.writeFile('comments.txt', JSON.stringify(newComment), function(err){
    if (err) throw err;
    console.log('Saved!');
  });
  res.render('success', {data: newComment});
});