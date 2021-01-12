import db from '../db'

export function getFavorites(userId:any) {
    return db('favorites')
    .join('users', 'users.id', 'favorites.userId')
    .join('posts', 'posts.id', 'favorites.postId')
    .select('posts.id', 'posts.userId as postedBy','posts.title', 'posts.content', 'users.username')
    .where({'users.id': userId})
    .orderBy('favorites.id', 'desc') 
}

export function addToFavorites(postId: any, userId:any) {
   return  db('favorites')
    .insert({'postId': postId, 'userId': userId})
}

export function deleteFavorite(id:any) {
    return db('favorites')
    .where({ 'favorites.postId': id })
    .del()
}