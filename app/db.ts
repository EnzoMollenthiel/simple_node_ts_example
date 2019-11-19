const Sequelize = require('sequelize')
import env from "../conf/env"

const {dbName, type, host, port, user, password} = env.db

const sequelize = new Sequelize(dbName, user, password, {
  host,
  port,
  dialect: type,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize.import('./models/UserModel');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;