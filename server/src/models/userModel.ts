import db from '../db'

export function createNewUser(user:any) {
    return db('users')
    .insert(user, 'id')
}

export function findUser(username:any) {
    return db('users')
    .where( 'username', username)
}