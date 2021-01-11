import db from '../db'

export function getAllPosts() {
    return db('post')
    .join('user', 'user.id', 'post.userId')
    .select('post.id', 'post.title', 'post.content', 'user.username')
    .orderBy('id', 'desc')
} 

export function findPostById(id:any) {
    return db('post')
    .join('user', 'user.id', 'post.userId')
    .select('post.id', 'post.title', 'post.content', 'user.username')
    .where({ 'post.id': id})
    .first()
}

export function addNewPost(newPost:any) {
    return db('post')
    .insert(newPost, ['id'])
    // .then((['id']) => {
    //     return findPostById(id)
    // })
} 

export function editPost(id:any, changes:any) {
    return db('post')
    .where({ id })
    .update(changes)
}

export function deletePost(id:any) {
   return db('post')
    .where({ 'post.id': id })
    .del()
}

