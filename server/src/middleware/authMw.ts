import jwt from 'jsonwebtoken'
// import { Request, Response, NextFunction } from 'express'

// interface CustomReq extends Request {
//     user: string
// }

function authMw( req:any, res:any, next:any) {
    const token = req.headers.authorization
    const secret = 'super secret sauce'
    if (token) {
        jwt.verify(token, secret, (err: any, decodedToken: any) => {
            if(err) {
                res.status(401).json({ message: 'unauthorized' })
            } else {
                req.user = decodedToken
                next()
            }
        })
    } else {
        res.status(401).json({ message: 'unauthorized' })
    }
}

export default authMw
