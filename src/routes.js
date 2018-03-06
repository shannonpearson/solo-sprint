var router = require('express').Router();
var jwt = require('jwt-simple'); // for encoding and decoding tokens

import knex from './models/db.js'
import User from './models/user.js';
import Goal from './models/goal.js';
import Post from './models/post.js';
import Task from './models/task.js';

// TODO: ATTACH ROUTE HANDLERS
  // See 2-complete-routes/README.md for which routes you should implement first.


router.post('/signup', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  // TODO: Complete the signup functionality:
    // Search for username
    // If taken, send a 409 status code
    // If available, hash the password and store it in the database
      // Send back a 201
});

router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  // TODO: Complete the login functionality:
    // Search for username
    // If not found, send back a 401 status code
    // If found, compare the hashed passwords
      // If there is a match
        // Create a token and send it to the client
      // If the match fails send back a 401 status code
});

router.get('/goals', function(req, res) {
  // returns array of all goal titles and ids
  // INPUT: 
  // OUTPUT: 
});

router.post('/goals', function() {
  // adds new goal to goals table
  // INPUT: 
  // OUTPUT: 
});

router.get('/goals/:id', function() {
  // returns details of a single goal
  // INPUT: 
  // OUTPUT: 
});

module.exports = router;
