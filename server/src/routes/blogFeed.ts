
import { Router,  Request, Response } from 'express' 
import {getAllPosts, findPostById,addNewPost, editPost, deletePost } from '../models/blogFeedModel'
import { deleteFavorite } from '../models/favoritesModel'
import authMw from '../middleware/authMw'

const router = Router()

router.get('/', (_req: Request, res: Response) => {
    getAllPosts()
    .then((posts:any) => {
        res.status(200).json(posts)
    })
    .catch((err:any) => {
        res.status(500).json({ message: err.message })
    })
})

router.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params

    findPostById(id)
    .then((singlePost: any) => {
        res.status(200).json(singlePost)
    })
    .catch((err:any) => {
        res.status(500).json({ message: err.message })
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
        res.status(500).json({ message: err.message })

    })

})

router.put('/:id', authMw, (req: any, res: any) => {
    const { user_name } = req.user 
    const { id } = req.params
    const { title, content } = req.body
    
    editPost( id, {title: title, content: content, username:user_name})
    .then((count: any) => {
        console.log(count)
        res.status(200).json({ message: 'post updated'})
    })
    .catch((err:any) => {
        res.status(500).json({ message: err.message })

    })
})

router.delete('/:id', authMw, (req:any, res: any) => {
    const { id } = req.params
    deleteFavorite(id)
    .then((favDelCount:any) => {
        console.log(favDelCount)  
        deletePost(id)
        .then((delCount:number) => {
            if (delCount > 0) {
                res.status(200).json({ message: 'post deleted' })
            }
        })
        .catch((err:any) => {
            res.status(500).json({ message: err.message })

        })
        
    })
    .catch((err:any) => {
        res.status(500).json({ message: err.message })

    })  
})


export default router