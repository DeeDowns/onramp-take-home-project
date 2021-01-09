import { Router,  Request, Response } from 'express'
// userController
// checkJwt

const router = Router()

router.get('/', (req: Request, res: Response) => {
    console.log(req.method)
    res.status(200).json({ message: 'ok'})
})

router.post('/register')


export default router 