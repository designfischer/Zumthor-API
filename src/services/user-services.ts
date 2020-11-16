import User from '../database/models/User'
import { formatResponse, validateOwnership } from '../helpers'

export async function createUserService(request: IUser) {        
    try {
        const hasUser = await User.findOne({ email: request.email })
        if (hasUser) return formatResponse(409, { message: 'User already exists' })

        const user = await User.create(request)
        return formatResponse(201, user)
    } catch(err) {
        return formatResponse(500, err)
    }        
}

export async function getUsersService() {
    try {
        const users = await User.find()
        return formatResponse(200, users)
    } catch(err) {
        return formatResponse(500, err)
    }
}

export async function deleteUserService(user_id: string, auth_id: string) {
    const isOwner = validateOwnership(user_id, auth_id)    
    if (!isOwner) return formatResponse(403, { message: 'Operation not allowed' })

    try {
        const deletedUser = await User.findByIdAndRemove(user_id)
        if (!deletedUser) return formatResponse(404, { message: 'User not found' })

        return formatResponse(200, { message: 'User deleted', deletedUser })
    } catch(err) {
        return formatResponse(500, err)
    }
}

export async function getUserByEmailService(user_email: string) {
    try {
        const user = await User.findOne({ email: user_email })
        if (!user) return formatResponse(404, { message: 'User not found' })
        
        return formatResponse(200, user)
    } catch(err) {
        return formatResponse(500, err)
    }
}
