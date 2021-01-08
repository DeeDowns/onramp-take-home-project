import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(logger)

// app.use('/feed', feedRouter)

app.get('/', (req, res) => {
    res.status(200).json({ Welcome: 'OnRamp Take-Home Project Blog Server'})
})


function logger(req: express.Request, res: express.Response, next: Function):void {
    console.log(`a ${req.method} request was made to ${req.url}`)
    next()
}

module.exports = app