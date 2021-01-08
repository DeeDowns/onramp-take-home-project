import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import blogPostRouter from './blog-feed/blogPost'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(logger)

app.use('/feed', blogPostRouter)

// app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
//     res.status(500).json({ message: err.message})
// })

app.get('/', (req:express.Request, res:express.Response) => {
    res.status(200).json({ Welcome: 'OnRamp Take-Home Project Blog Server'})
})


function logger (req: express.Request, res: express.Response, next: express.NextFunction):void {
    console.log(`a ${req.method} request was made to ${req.url}`)
    next()
}

export default app