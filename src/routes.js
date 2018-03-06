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
    // var user = User.findByUsername(username);
    // if (user) {
    // // If taken, send a 409 status code
    //   res.sendStatus(409);
    // } else {
    // // If available, hash the password and store it in the database

    //   // Send back a 201
    //   res.sendStatus(201);
    // }
});

router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  // TODO: Complete the login functionality:
    // Search for username
    // var user = User.findByUsername(username);
    // if (!user) {
    // // If not found, send back a 401 status code
    //     res.sendStatus(401);
    // } else {
    // // If found, compare the hashed passwords
    //   // hash password
    //   // check for matches
    //   if () {
    //   // If there is a match
    //     // Create a token and send it to the client
        
    //   } else {
    //   // If the match fails send back a 401 status code
    //     res.sendStatus(401);
    //   }
    // }
});

router.get('/goals', function(req, res) {
  // returns array of all goal titles and ids
  // INPUT: user id
  // OUTPUT: res, array of goals
  var goals = Goal.findGoalsByUserId(req.body.id);
  res.send(goals);
});

router.post('/goals', function(req, res) {
  // adds new goal to goals table
  // INPUT: goal obj with title, description, user id
  // OUTPUT: res
  Goal.addGoal(req.body.title, req.body.description, req.body.id);
});

router.get('/goals/:id', function(req, res) {
  // returns details of a single goal
  // INPUT: goal id
  // OUTPUT: res, goal object 
  // parse url, set id var
  var goal = Goal.retrieveById(id);
  res.send(goal);
});

module.exports = router;
