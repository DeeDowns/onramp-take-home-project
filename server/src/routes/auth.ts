import { Router, Request, Response } from 'express'
import bycrypt from 'bcryptjs'
import { findUser } from '../models/userModel'
import makeJwt from '../makeJwt'

const router = Router()

router.post('/login', (req: Request, res: Response) => {
    findUser(req.body.username)
    .then((user: any ) => {
        console.log('user array',user[0].password)
        if(user[0] && bycrypt.compareSync(req.body.password, user[0].password)) {
            const token = makeJwt(user[0])
            res.status(200).json({ message: `welcome ${user[0].username}`, token})
        }
        else {
            res.status(400).json({ error: 'invalid credentials'})
        }
    })
    .catch((err: any) => {
        console.log(err.message)
    })
})

export default router 