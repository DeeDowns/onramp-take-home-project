import {Router} from 'express'
import { getFavorites, addToFavorites } from '../models/favoritesModel'
import authMw from '../middleware/authMw'

const router = Router()

router.get('/', authMw, (req: any, res: any) => {
    const { subject } = req.user
    
    getFavorites(subject)
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

    addToFavorites(id, subject)
    .then((favorites: any) => {
        console.log(favorites)
        res.status(201).json({ message: 'post added to favorites'})
    })
    .catch((err:any) => {
        console.log(err)
    })
})

export default router