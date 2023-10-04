import { Router } from 'express'
import { useController } from '../controller/user'

const users = Router()

users.use('/', useController.server)

export { users }
