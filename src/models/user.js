var db = require('./db');

var User = {};

User.findByUsername = function(username) {
    return db('users').where({ username: username }).select('*')
	    .then(function(user) {
	        return user;
	    })
	    .catch(function(err) {
	        console.error(err)
	    });
};

// TODO: ADD MORE MODEL FUNCTIONS HERE

User.addUser = function(username, password) {
	return db('users').insert({ username: username, password: password })
	    .then(function(result) {
		  	res.json({ 
		  		success: true, 
		  		message: 'successfully inserted user into database'
		  	})
	    })
	    .catch(function(err) {
	    	console.log('error inserting user into database');
	    });
}

module.exports = User;

// test queries //
// INSERT INTO users (username, password) VALUES ('shannon', 'rainbows');
// INSERT INTO users (username, password) VALUES ('krisha', 'cookies');
// INSERT INTO users (username, password) VALUES ('shahzeb', 'shazam');
// INSERT INTO users (username, password) VALUES ('stephanie', 'frenchfries');
// INSERT INTO users (username, password) VALUES ('jacob', 'jerk');

// GET * FROM users;