import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import { Server } from 'typescript-rest'
import dbconnection from './dbConnection'


// import {createConnection} from "typeorm";
// import {User} from "./entity/User";

export const app: express.Application = express()
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())


Server.buildServices(app)

let port = Number(process.env.PORT) || 4000

dbconnection
    .then(() => {
        app.listen(port, () => {
            console.log(`server running on port ${port}`)})
    })
    .catch(console.error)


 




