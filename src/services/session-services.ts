import User from '../database/models/User'
import { formatResponse } from '../helpers'

export async function createSessionService(user_email: string) {
    try {
        const user = await User.findOne({ email: user_email })
        if (!user) return formatResponse(404, { message: 'User not found' })
        return formatResponse(200, { auth: true, user })
    } catch(err) {
        return formatResponse(500, err)
    }
}
