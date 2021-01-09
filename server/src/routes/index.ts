import { Router } from 'express'
import auth from './auth'
import users from './users'

const routes = Router()

routes.use('/', auth)
routes.use('/users', users)

export default routes