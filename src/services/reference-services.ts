import Reference from '../database/models/Reference'
import { formatResponse, validateOwnership } from '../helpers'

export async function createReferenceService(body: IReferenceBody, user_id: string, auth_id: string) {
    const isOwner = validateOwnership(user_id, auth_id)
    if (!isOwner) return formatResponse(403, { message: 'Operation not allowed' })

    const referenceData = { userId: user_id, ...body }

    try {
        const reference = await Reference.create(referenceData)
        return formatResponse(201, reference)
    } catch(err) {
        return formatResponse(500, err)
    }
}

export async function deleteReferenceService(reference_id: string, user_id: string, auth_id: string) {
    const isOwner = validateOwnership(user_id, auth_id)
    if (!isOwner) return formatResponse(403, { message: 'Operation not allowed' })

    try {
        const deletedReference = await Reference.findByIdAndRemove(reference_id)
        return formatResponse(200, { message: 'Deleted successfully', deletedReference })
    } catch(err) {
        return formatResponse(500, err)
    }
}