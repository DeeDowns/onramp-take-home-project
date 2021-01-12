
import { Router,  Request, Response } from 'express' 
import {getAllPosts, findPostById,addNewPost, editPost, deletePost } from '../models/blogFeedModel'
import { deleteFavorite } from '../models/favoritesModel'
import authMw from '../middleware/authMw'

const router = Router()

router.get('/', (_req: Request, res: Response) => {
    getAllPosts()
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

    findPostById(id)
    .then((singlePost: any) => {
        console.log(singlePost)
        res.status(200).json(singlePost)
    })
    .catch((err:any) => {
        console.log(err)
    })
})

router.post('/', authMw, (req: any, res: any) => {
   
    const { subject } = req.user
    const { title, content } = req.body
    addNewPost({title: title, content: content, userId: subject })
    .then((blogPost: any) => {
        console.log(blogPost)
        res.status(201).json({ message: 'post created'})
    })
    .catch((err:any) => {
        console.log(err)
    })

})

router.put('/:id', authMw, (req: any, res: any) => {
    const { user_name } = req.user 
    const { id } = req.params
    const { title, content } = req.body
    // db('post')
    // .join('user', 'user.id', 'post.userId')
    // .select('post.id', 'post.title', 'post.content', 'user.username')
    // .where({'post.id': id})
    // .update({ title: title, content: content, username:user_name})
    editPost( id, {title: title, content: content, username:user_name})
    .then((count: any) => {
        console.log(count)
        res.status(200).json({ message: 'post updated'})
    })
    .catch((err:any) => {
        console.log(err)
    })
})

router.delete('/:id', authMw, (req:any, res: any) => {
    const { id } = req.params
    deleteFavorite(id)
    .then((thing:any) => {
        console.log(thing)
        deletePost(id)
        .then((delCount:number) => {
            console.log(delCount)
            if (delCount > 0) {
                res.status(200).json({ message: 'post deleted' })
            }
        })
        .catch((err:any) => {
            console.log(err)
        })
    })
    .catch((err:any) => {
        console.log(err)
    })
    
})


export default router