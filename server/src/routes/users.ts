import { Router,  Request, Response } from 'express'
import db from '../db'
import bycrypt from 'bcryptjs'

const router = Router()

router.post('/', (req: Request, res: Response) => {
    // check req body
    console.log(req.body.username, req.body.password, req.body.email)
    const { username, email, password } = req.body
    const credentials = req.body
    const hashPassword = bycrypt.hashSync(credentials.password, 8)
    credentials.password =hashPassword

    db('user')
    .insert({username: username, password: password, email: email}, ['id'])
    .then((_user: any) => {
        res.status(200).send('new user registered')
    })
    
})




export default router 