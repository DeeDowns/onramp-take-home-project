import db from '../db'

export function createNewUser(user:any) {
    return db('user')
    .insert(user, 'id')
}

export function findUser(username:any) {
    return db('user')
    .where( 'username', username)
}