module.exports = {

  development: {
    // TODO: ADD CONNECTION INFO
    client: 'sqlite3',
    connection: { 
    	filename: './db.sqlite3'
    }
  },
  //production: { client: 'pg', connection: process.env.DATABASE_URL }

};
