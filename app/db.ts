const Sequelize = require('sequelize')
import env from "../conf/env"

const {dbName, type, host, port, user, password} = env.db

// Iniatializing Sequelize object, pool of connections with database, using specific informations defined in "conf/env.ts" file
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

// Importing data models, now sequelize nows and using this models
sequelize.import('./models/UserModel');

// Sequelize authenticates with database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;