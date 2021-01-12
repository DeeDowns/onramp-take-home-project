import knex from 'knex'
// const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')
export default knex(config);