import { Router } from 'express'
import UserController from '../controllers/user-controller'
import SessionController from '../controllers/session-controller'
import ReferenceController from '../controllers/reference-controller'

import { auth } from '../middlewares'

const routes = Router()

routes.get('/', (req, res) => res.status(200).send('Zumthor V1'))

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_email', UserController.getUserByEmail)
routes.delete('/users/:user_id', auth, UserController.deleteUser)

routes.post('/sessions', SessionController.createSession)

routes.post('/users/:user_id/references', auth, ReferenceController.createReference)
routes.delete('/users/:user_id/references/:reference_id', auth, ReferenceController.deleteReference)

routes.get('/users/:user_id/references', ReferenceController.getReferencesByUser)
routes.get('/references/:reference_id', ReferenceController.getReferenceById)

export default routes