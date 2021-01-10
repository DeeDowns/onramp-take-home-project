import { Router } from 'express'
import auth from './auth'
import users from './users'
import blogFeed from './blogFeed'

const routes = Router()

routes.use('/', auth)
routes.use('/users', users)
routes.use('/feed', blogFeed)

export default routes