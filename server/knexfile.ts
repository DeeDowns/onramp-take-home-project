
module.exports = {
    client: 'pg',
    connection: {
      database: 'blogdb',
      user:     'postgres',
      password: ''
    }, 
    migrations: {
      extension: "ts",
      directory: "./src/migrations",
    }
};
