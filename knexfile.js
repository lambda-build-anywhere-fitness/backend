
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/auth.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true,
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: ':memory'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './data/auth.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};