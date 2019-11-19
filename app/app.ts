import express = require('express')
import bodyParser = require('body-parser')

import env from "../conf/env"
import sequelize from "./db"

import UsersController from "./controllers/UsersController";

// Create a new express application instance
const app: express.Application = express()

sequelize.sync();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// ROUTES
try {
  
  app.use('/users', UsersController)
  
} catch (e) {
  console.log(e);
}
app.listen(env.server.port, () => {
  console.log(`Example app listening on port ${env.server.port}!`)
})