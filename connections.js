const knex = require('knex')({
    client: 'mysql',
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