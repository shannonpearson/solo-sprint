var db = require('./db');

var Goal = {};

// TODO: ADD MORE MODEL FUNCTIONS HERE

Goal.addGoal = function(title, description, duedate, user) {
	return db('goals').insert({
		title: title,
		description: description,
		duedate: duedate,
		completed: false,
		user: user
	})
	.then(function(result) {
	  	res.json({ 
	  		success: true, 
	  		message: 'successfully added goal'
	  	})
	})
	.catch(function(err) {
		console.log('error adding goal :-(')
	})
};

Goal.retrieveById = function(id) {
	return db('goals').where({ id: id }).select('*')
		.then(function(goal) {
			console.log('Goal retrieved: ', goal);
			return goal;
		})
		.catch(function(err) {
			console.log('error retrieving goal :-(')
		})
};

Goal.markGoalCompleted = function(id) {
	return db('goals').where({ id: id }).update({ completed: true })
		.then(function(result) {
		  	res.json({ 
		  		success: true, 
		  		message: 'goal completed'
		  	})
		})
		.catch(function(err) {
			console.log('failed to mark goal completed :-(');
		})
};

Goal.findGoalsByUserId = function(userid) {
	return db('goals').where({ user: userid }).select('*')
		.then(function(goals) {
			console.log('Users goals: ', goals);
		})
		.catch(function(err) {
			console.log('failed to retrieve users goals :-(')
		})
};


module.exports = Goal;

//INSERT INTO goals (title, description, user) VALUES ('climb mount everest', 'go up this tall mountain', 2);
//INSERT INTO goals (title, description, user) VALUES ('make pasta', 'just wanna make some tasty penne yo', 1);
//INSERT INTO goals (title, description, user) VALUES ('run an ultramarathon', '50 miles or bust', 4);
