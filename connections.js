require('.knexfile');

const knex = require('knex')({
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