import { Request, Response } from 'express'
import { createReferenceService, deleteReferenceService } from '../services/reference-services'

const ReferenceController = {
    async createReference(req: Request, res: Response) {
        const { user_id } = req.params
        const auth_id = req.userId
        const body: IReferenceBody = req.body

        const response = await createReferenceService(body, user_id, auth_id)

        return res.status(response.status).json(response.data)
    },
    async deleteReference(req: Request, res: Response) {
        const { user_id, reference_id } = req.params
        const auth_id = req.userId

        const response = await deleteReferenceService(reference_id, user_id, auth_id)

        return res.status(response.status).json(response.data)
    }
}

export default ReferenceController