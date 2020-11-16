import { Request, Response } from 'express'
import { createSessionService } from '../services/session-services'

const SessionController = {
    async createSession(req: Request, res: Response) {
        const body: IUser = req.body
        const response = await createSessionService(body.email)
        return res.status(response.status).json(response.data)
    }
}

export default SessionController