import express, {Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'

import routes from './routes'

const app: express.Application = express()
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(logger)

app.use('/', routes)

app.get('/', (req: Request, res: Response) => {
    console.log(req.method)
    res.status(200).json({ message: 'Server Uppppp'})
})

function logger (req: Request, res: Response, next: NextFunction) {
    console.log(`a ${req.method} was made to ${req.url} with a status code of ${res.statusCode}`)
    next()
}

export default app
