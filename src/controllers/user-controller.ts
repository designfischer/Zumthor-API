import { Request, Response } from 'express'
import { 
    createUserService, 
    getUsersService, 
    deleteUserService, 
    getUserByEmailService 
} from '../services/user-services'

const UserController = {
    async createUser(req: Request, res: Response) {
        const body: IUser = req.body
        const response = await createUserService(body)
        return res.status(response.status).json(response.data)        
    },
    async getUsers(req: Request, res: Response) {
        const response = await getUsersService()
        return res.status(response.status).json(response.data)
    },
    async deleteUser(req: Request, res: Response) {
        const { user_id } = req.params
        const auth_id = req.userId
        const response = await deleteUserService(user_id, auth_id)
        return res.status(response.status).json(response.data)
    },
    async getUserByEmail(req: Request, res: Response) {
        const { user_email } = req.params
        const response = await getUserByEmailService(user_email)
        return res.status(response.status).json(response.data)
    }
}

export default UserController

