const knex_client = require('knex')({
    client: 'postgresql',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : '',
      database : 'skills_tinder'
    },
    migrations: {
      tableName: 'migrations'
    }
  });

  module.exports = knex_client;