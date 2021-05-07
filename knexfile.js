// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : '',
      database : 'skill_tinder'
    },
    migrations: {
      tableName: 'migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : '',
      database : 'skill_tinder'
    },
    migrations: {
      tableName: 'migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : '',
      database : 'skill_tinder'
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
