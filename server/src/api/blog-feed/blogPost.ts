import express from 'express'

const router = express.Router()

router.get('/', (req: express.Request, res:express.Response) => {
    /*Posts.allPosts()
        .then(posts => {
            console.log(posts)
            res.status(200).json(posts)
        })
        .catch( err => {
            console.log(err)
            res.status(500),json({ message: err.message })
        })
    */
   res.status(200).json({  message: 'all blog posts'})
})

router.post('/')

router.put('/:id')

router.delete('/:id')

export default router