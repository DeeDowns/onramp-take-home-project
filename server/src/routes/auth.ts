import { Router, Request, Response } from 'express'
// authController
// checkJwt

const router = Router()

router.get('/register', (req: Request, res: Response) => {
    console.log(req.method)
    res.status(200).json({ message: 'ok'})
})

router.get('/login', (req: Request, res: Response) => {
    console.log(req.method)
    res.status(200).json({ message: 'ok'})
})


export default router 