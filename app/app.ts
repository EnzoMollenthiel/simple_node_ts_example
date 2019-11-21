import express = require('express')
import bodyParser = require('body-parser')

import env from "../conf/env"
import sequelize from "./db"

import UsersController from "./controllers/UsersController";

// Create a new express application instance
const app: express.Application = express()

// Synchronize sequelize acces to database, creating data models if not exist
sequelize.sync();

// Using bodyParser library to get HTTP requests body in the request object
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// ROUTES
try {
  
  // Using UsersController router file if URL matching "/users" pattern
  app.use('/users', UsersController)
  
} catch (e) {
  console.log(e);
}

// Serving Node.js application on a port defined in "conf/env.ts" file
app.listen(env.server.port, () => {
  console.log(`Example app listening on port ${env.server.port}!`)
})