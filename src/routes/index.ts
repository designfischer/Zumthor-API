import { Router } from 'express'
import UserController from '../controllers/user-controller'
import SessionController from '../controllers/session-controller'

import { auth } from '../middlewares'

const routes = Router()

routes.get('/', (req, res) => res.status(200).send('Zumthor V1'))

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_email', UserController.getUserByEmail)
routes.delete('/users/:user_id', auth, UserController.deleteUser)

routes.post('/sessions', SessionController.createSession)

export default routes