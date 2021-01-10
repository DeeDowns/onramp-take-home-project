import { Router,  Request, Response } from 'express'
import db from '../db'

const router = Router()

router.get('/', (_req: Request, res: Response) => {
    db('post')
    .join('user', 'user.id', 'post.userId')
    .select('post.id', 'post.title', 'post.content', 'user.username')
    .then((posts:any) => {
        console.log(posts)
        res.status(200).json(posts)
    })
    .catch((err:any) => {
        console.log(err)
    })
})




export default router

// select post.id, post.title, post.content, "user".username
// from post
// inner join "user" on post."userId" = "user".id;