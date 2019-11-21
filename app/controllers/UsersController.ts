/**
 * Using router object from rexpress to create routes in the application
 * Routes matching HTTP method and url
 */
const router = require('express').Router()
import Users from '../daos/UsersDAO'

/**
 * ROUTE : GET method on /users url
 * 
 * @req request HTTP object
 * @res response HTTP object
 */
router.get('/', (req: any, res: any) => {
    /**
     * Using UsersDAO getAll method, retrieving all users
     */
    Users.getAll()
        /**
         * @users users data retrived from Users.getAll function
         */
        .then((users: any) => {
            /**
             * users data are send to the front-end json method from ressponse HTTP object
             */
            res.json(users)
        })
        .catch((err: any) => {
            /**
             * error is send to the front-end using send methos from response HTTP object
             */
            res.send(err)
        })
})

/**
 * ROUTE : POST method on /users url
 * 
 * @req request HTTP object
 * @res response HTTP object
 */
router.post('/', (req: any, res: any) => {
    /**
     * Using UsersDAO create method, creating a new user from request body data
     */
    Users.create(req.body)
        /**
         * data retrieved from Users.create method
         */
        .then((data: any) => {
            /**
             * accessing dataValues property of data object
             * created user's data are now assiociated to const user
             */
            const user = data.dataValues
            /**
             * user's data are send to the front-end json method from ressponse HTTP object
             */
            res.json(user)
        }).catch((err: any) => {
            /**
             * error is send to the front-end using send methos from response HTTP object
             */
            res.send(err)
        })
})

export default router