import db from '../db'

export function getAllPosts() {
    return db('posts')
    .join('users', 'users.id', 'posts.userId')
    .select('posts.id', 'posts.title', 'posts.content', 'users.username')
    .orderBy('id', 'desc')
} 

export function findPostById(id:any) {
    return db('posts')
    .join('users', 'users.id', 'posts.userId')
    .select('posts.id', 'posts.title', 'posts.content', 'users.username')
    .where({ 'posts.id': id})
    .first()
}

export function addNewPost(newPost:any) {
    return db('posts')
    .insert(newPost, ['id'])
    // .then((['id']) => {
    //     return findPostsById(id)
    // })
} 

export function editPost(id:any, changes:any) {
    return db('posts')
    .where({ id })
    .update(changes)
}

export function deletePost(id:any) {
   return db('posts')
    .where({ 'posts.id': id })
    .del()
}

