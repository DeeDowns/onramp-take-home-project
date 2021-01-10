import { Router, Request, Response } from 'express'
import bycrypt from 'bcryptjs'
import db from '../db'
import makeJwt from '../makeJwt'

const router = Router()

router.post('/login', (req: Request, res: Response) => {
    db('user').select()
    .where({ username: req.body.username})
    .first()
    .then((user: any ) => {
        console.log(user)
        if(user && bycrypt.compareSync(req.body.password, user.password)) {
            const token = makeJwt(user)
            res.status(200).json({ message: `welcome ${user.username}, ${token}`})
        }
        else {
            res.status(400).json({ message: 'invalid credentials'})
        }
    })
    .catch((err: any) => {
        console.log(err)
    })
})

router.post('/logout', (_req: Request, res: Response) => {
    res.status(200).json({ message: 'logged out'})
})


export default router 