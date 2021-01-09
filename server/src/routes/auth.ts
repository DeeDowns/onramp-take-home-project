import { Router, Request, Response } from 'express'
// import jwt from 'jsonwebtoken'
import bycrypt from 'bcryptjs'
import db from '../db'




const router = Router()


router.post('/login', (req: Request, res: Response) => {
    db('user').select()
    .where({ username: req.body.username})
    .first()
    .then((user: any ) => {
        console.log(user)
        if(user && bycrypt.compareSync(req.body.password, user.password)) {
            res.cookie('loggedIn', 'true')
            // res.redirect('/feed')
            console.log(res.cookie)
        }
    })
    .catch((err: any) => {
        console.log(err)
        res.redirect('/login')
    })
})


// function makeJwt( { id, username }: any) {
//     const payload = {
//         username,
//         subject: id
//     }
//     const secret = '{
//         jwtSecret: 'super secret sauce'
//     }
//     const options = {
//         expiresIn: '2 hours'
//     }

//     return jwt.sign(payload, secret.jwtSecret, options)

// }

export default router 