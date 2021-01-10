import jwt from 'jsonwebtoken'

function makeJwt({ id, username }: any) {
    const payload = {
        username: username,
        subject: id
    }
    const secret = {
        jwtSecret: 'super secret sauce'
    }

    const options = {
        expiresIn: '2 hours'
    }

    return jwt.sign(payload, secret.jwtSecret, options)
}

export default makeJwt