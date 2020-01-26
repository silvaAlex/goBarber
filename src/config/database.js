module.exports = {
  development: {
    username: 'postgres',
    password: 'docker',
    database: 'gobarber',
    host: 'localhost',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'docker',
    database: 'gobarber_test',
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
    username: 'postgres',
    password: 'docker',
    database: 'gobarber_prod',
    host: 'localhost',
    dialect: 'postgres',
  },
};
