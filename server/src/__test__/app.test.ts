// import users from '../routes/users'
import app from '../app'
const supertest = require('supertest')

describe('/', () => {
    describe('GET to /', () => {
        it('should return a http status code 200 when making a get request to the base url', () => {
            return supertest(app)
            .get('/')
            .then((res:any) => {
                expect(res.status).toBe(200)
            })
        })
        it('should return a json object with a welcome message', () => {
            return supertest(app)
            .get('/')
            .then((res:any) => {
                expect(res.body.message).toBe('Server Uppppp')
            })
        })
    })
})
