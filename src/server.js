var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// TODO: SET UP SERVER
  // Add middleware
  var database = require('./db.sqlite3');
  // Add static file service
  app.use(express.static(__dirname + '/client'));
  app.use(express.static(__dirname + '/node_modules'));
  // Add API routes

// Example route. See server-spec.js for the related test.
app.get('/zen', function(req, res) {
  res.send('There are no accidents. - Master Oogway')
})

app.listen(8080, function () {
  console.log('GoalPosts App \nListening on port 8080...')
})

module.exports = app;
