import sequelize from "../db"
const User = sequelize.import('../models/UserModel')

export default {

  getAll() {
    return User.findAll()
  },

  create(user: any) {

    const query = {
        USR_PSEUDO: user.pseudo,
        USR_EMAIL: user.email,
      }
      
    return User.create(query)
  }
}