import jwt from 'jsonwebtoken'

function authMw( req:any, res:any, next:any) {
    const token = req.headers.authorization
    // normally held in an environment variable for simplicity
    // but for the sake simplicity and time I stored the secret here
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
