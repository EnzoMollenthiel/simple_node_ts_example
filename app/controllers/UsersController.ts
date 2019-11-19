const router = require('express').Router()
import Users from '../daos/UsersDAO'

router.get('/', (req: any , res: any) => {

    Users.getAll()
        .then((users: any) => { 
            res.json(users) 
        })
        .catch((err: any) => {
            res.status(err.statusCode).send(err)
        })
})

router.post('/', (req: any, res: any) => {

    Users.create(req.body)
        .then((data: any) => {
        const user = data.dataValues

        res.json(user)
        }).catch((err: any) => {
            res.send(err)
        })
})

export default router