import {Router} from 'express'
import db from '../db'
import authMw from '../middleware/authMw'

const router = Router()

router.get('/', authMw, (req: any, res: any) => {
    const { subject } = req.user
    db('favorite')
    .join('user', 'user.id', 'favorite.userId')
    .join('post', 'post.id', 'favorite.postId')
    .select('post.id', 'post.userId as postedBy','post.title', 'post.content', 'user.username')
    .where({'user.id': subject})
    .orderBy('favorite.id', 'desc')
    .then((favorites: any) => {
        console.log(favorites)
        res.status(200).json(favorites)
    })
    .catch((err:any) => {
        console.log(err)
    })

})

router.post('/:id', authMw, (req: any, res: any) => {
    const { subject } = req.user
    const { id } = req.params

    db('favorite')
    .insert({'postId': id, 'userId': subject})
    .then((favorites: any) => {
        console.log(favorites)
        res.status(201).json({ message: 'post added to favorites'})
    })
    .catch((err:any) => {
        console.log(err)
    })
})
// insert into favorite ("userId", "postId") 
// values (10, 24)

export default router