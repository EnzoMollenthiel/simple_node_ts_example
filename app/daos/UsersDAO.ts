import sequelize from "../db"
const User = sequelize.import('../models/UserModel')

export default {

  getAll() {
    /**
     * Using findAll method from sequelize to retrieve all users 
     * https://sequelize.org/master/manual/querying.html
     */
    return User.findAll()
  },

  /**
   * Create user DAO function
   * @param user user from request body
   */
  create(user: any) {

    const query = {
      USR_PSEUDO: user.pseudo,
      USR_EMAIL: user.email,
    }

    /**
    * Using create method from sequelize to creat a new user 
    * https://sequelize.org/v4/manual/tutorial/models-usage.html
    */
    return User.create(query)
  }
}