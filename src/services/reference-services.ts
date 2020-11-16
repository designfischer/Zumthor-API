import Reference from '../database/models/Reference'
import { formatResponse, validateOwnership } from '../helpers'

const MAX_REFS = 10

export async function createReferenceService(body: IReferenceBody, user_id: string, auth_id: string) {    
    const isOwner = validateOwnership(user_id, auth_id)
    if (!isOwner) return formatResponse(403, { message: 'Operation not allowed' })

    const referenceData = { userId: user_id, ...body }

    try {
        const references = await Reference.find({ userId: user_id })
        if (references.length >= MAX_REFS) return formatResponse(400, { message: 'Max references reached' })
        
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
        if (!deletedReference) return formatResponse(404, { message: 'Not found' })
        return formatResponse(200, { message: 'Deleted successfully', deletedReference })
    } catch(err) {
        return formatResponse(500, err)
    }
}

export async function getReferencesByUserService(user_id: string) {
    try {
        const references = await Reference.find({ userId: user_id })
        if (!references) return formatResponse(404, { message: 'References not found' })
        return formatResponse(200, references)
    } catch(err) {
        return formatResponse(500, err)
    }
}

export async function getReferenceByIdService(reference_id: string) {
    try {
        const reference = await Reference.findById(reference_id)
        if (!reference) return formatResponse(404, { message: 'Not found' })
        return formatResponse(200, reference)
    } catch(err) {
        return formatResponse(500, err)
    }
}