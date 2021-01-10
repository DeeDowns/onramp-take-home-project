import { Router } from 'express'
import auth from './auth'
import users from './users'
import blogFeed from './blogFeed'
import favorites from './favorites'

const routes = Router()

routes.use('/', auth)
routes.use('/users', users)
routes.use('/feed', blogFeed)
routes.use('/favorites', favorites)

export default routes