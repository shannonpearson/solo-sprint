exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),
    knex('goals').del(),

    // TODO: DELETE ALL ENTRIES IN EXISITING TABLES

    // Insert seed entries
    knex('users').insert({username: 'alice', password: 'alice'}), // :(
    knex('users').insert({username: 'bob', password: 'bob'}),
    knex('goals').insert({title: 'do something', description: 'do the thing!', user: 1})

    // TODO: INSERT DATA INTO TABLES
  );
};
