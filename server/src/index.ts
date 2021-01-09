import 'reflect-metadata'
// import {createConnection} from "typeorm";

import app from './app'

let port = Number(process.env.PORT) || 4003

app.listen(port, () => {console.log(`server running on port ${port}`)})


 




