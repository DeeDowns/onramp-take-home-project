import { Router,  Request, Response } from 'express'
import db from '../db'
import bycrypt from 'bcryptjs'

const router = Router()

router.post('/', (req: Request, res: Response) => {
    // check req body
    console.log(req.body.username, req.body.password, req.body.email)

    const credentials = req.body
    const hashPassword = bycrypt.hashSync(credentials.password, 8)
    credentials.password =hashPassword

    db('user')
    .insert({username: req.body.username, password: req.body.password, email: req.body.email}, ['id'])
    .then((user: any) => {
        res.send(user)
        res.status(200)
    })
    
})




export default router 