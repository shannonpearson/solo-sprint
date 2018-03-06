var db = require('./db');

var Goal = {};

// TODO: ADD MORE MODEL FUNCTIONS HERE

Goal.addGoal = function(title, description, user) {
	return db('goals').insert({
		title: title,
		description: description,
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
	return db('goals').where({ user: id }).select('*')
		.then(function(goal) {
			console.log('Goal retrieved: ', goal);
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
