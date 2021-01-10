import { Router,  Request, Response } from 'express' 
import db from '../db'
// import jwt from 'jsonwebtoken'

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

router.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params
    db('post')
    .join('user', 'user.id', 'post.userId')
    .select('post.id', 'post.title', 'post.content', 'user.username')
    .where({ 'post.id': id})
    .then((singlePost: any) => {
        console.log(singlePost)
        res.status(200).json(singlePost)
    })
    .catch((err:any) => {
        console.log(err)
    })
})

router.post('/', (req: Request, _res: Response) => {
    const { title, content, userId } = req.body
    db('post')
    .join('user', 'user.id', 'post.userId')
    .select('post.title', 'post.content', 'user.id')
    .insert( { title, content, userId: 'user.id'}, ['id'] )
    .where({ 'user.id': userId})
    .then((blogPost: any) => {
        console.log(blogPost)
    })
    .catch((err:any) => {
        console.log(err)
    })

})

router.put('/:id', (req: Request, _res: Response) => {
    const { id } = req.params
    const changes = req.body
    db('post')
    .join('user', 'user.id', 'post.userId')
    .select('post.id', 'post.title', 'post.content', 'user.username')
    .where({id})
    .update(changes)
    .then((updated: any) => {
        console.log(updated)
    })
    .catch((err:any) => {
        console.log(err)
    })

})



export default router

// select post.id, post.title, post.content, "user".username
// from post
// inner join "user" on post."userId" = "user".id;