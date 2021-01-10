import {Router} from 'express'
import db from '../db'
import authMw from '../middleware/authMw'

const router = Router()

router.get('/', authMw, (req: any, _res: any) => {
    const { subject } = req.user
    db('favorite')
    .join('user', 'user.id', 'favorite.userId')
    .join('post', 'post.id', 'favorite.postId')
    .select('post.id', 'post.userId as postedBy','post.title', 'post.content', 'user.username')
    .where({'user.id': subject})
    .then((favorites: any) => {
        console.log(favorites)
    })
    .catch((err:any) => {
        console.log(err)
    })

})

// router.post('/:id', authMw, (req: any, _res: any) => {
//     const { subject } = req.user
//     const { id } = req.params

//     db('favorite')
//     .join('user', 'user.id', 'favorite.userId')
//     .join('post', 'post.id', 'favorite.postId')
//     .select("post.id", 'post.userId as postedBy','post.title', 'post.content', 'user.username')
//     // .where({'post.id': id})
//     .insert()
//     .then((favorites: any) => {
//         console.log(favorites)
//     })
//     .catch((err:any) => {
//         console.log(err)
//     })
// })


export default router