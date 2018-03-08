exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments();
    // TODO: DESCRIBE THE USER TABLE
    table.string('username').defaultTo(null);
    table.string('password').defaultTo(null);
  }).then(() => {
  // TODO: CREATE ANY OTHER TABLES YOU NEED
	return knex.schema.createTableIfNotExists('goals', function(table) {
	  	table.increments();
	  	table.string('title').defaultTo(null);
	  	table.string('description').defaultTo(null);
      table.date('duedate').defaultTo(null);
	  	table.boolean('completed').defaultTo(false);
	  	table.integer('user').references('id').inTable('users').defaultTo(null);
	})
  }).then(() => { // posts: creates notes associated with a goal
  	return knex.schema.createTableIfNotExists('posts', function(table) {
  		table.increments();
  		table.string('note').notNullable();
  		table.integer('goal').references('id').inTable('goals').defaultTo(null);
  	})
  })
  .then(() => { // tasks: creates specific (sub)tasks associated with a goal
  	return knex.schema.createTableIfNotExists('tasks', function(table) {
  		table.increments();
  		table.string('title').notNullable();
  		table.boolean('completed').defaultTo(false);
  		table.integer('goal').references('id').inTable('goals').defaultTo(null);
  	})
  })
};

exports.down = function(knex, Promise) {
  // TODO: DROP OTHER TABLES

  return knex.schema.dropTable('users');
  knex.schema.dropTable('goals');

};
