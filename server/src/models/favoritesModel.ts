import db from '../db'

export function getFavorites(userId:any) {
    return db('favorite')
    .join('user', 'user.id', 'favorite.userId')
    .join('post', 'post.id', 'favorite.postId')
    .select('post.id', 'post.userId as postedBy','post.title', 'post.content', 'user.username')
    .where({'user.id': userId})
    .orderBy('favorite.id', 'desc') 
}

export function addToFavorites(postId: any, userId:any) {
   return  db('favorite')
    .insert({'postId': postId, 'userId': userId})
}