import { Request, Response, NextFunction } from 'express'

export function auth(req: Request, res: Response, next: NextFunction) {
    const { auth } = req.headers
    if (!auth) return res.status(500).json({ message: 'No token' })
    req.userId = auth as string
    next()
}