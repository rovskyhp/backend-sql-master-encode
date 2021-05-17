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
      host : 'kashin.db.elephantsql.com',
      user : 'lflhtgpv',
      password : 'xAgRGZhQ7bXkW9hfs1XIn_F_3hZLVyIf',
      database : 'lflhtgpv'
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
