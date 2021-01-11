import { Router,  Request, Response } from 'express'
import { createNewUser } from '../models/userModel'
import bycrypt from 'bcryptjs'

const router = Router()

router.post('/', (req: Request, res: Response) => {
    const credentials = req.body
    const hashPassword = bycrypt.hashSync(credentials.password, 8)
    credentials.password = hashPassword

    createNewUser(credentials)
    .then((user: any) => {
        console.log('USER',user[0])
        res.status(200).send('new user registered')
    })
    
})

export default router 