import { createConnection, Connection, ConnectionOptions } from 'typeorm'

// import entity from './entity'

const connectionOptions: ConnectionOptions = 
{
    "type": "postgres",
    "host": "localhost",
    "port": Number(process.env.DB_PORT) || 5432,
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "postgres",
    "database": process.env.DB_NAME || "blogdb",
    "synchronize": true,
    "logging": false,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
}

const dbconnection: Promise<Connection> = createConnection(connectionOptions)

export default dbconnection