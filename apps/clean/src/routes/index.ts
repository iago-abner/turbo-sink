import { Router } from "express"
import { users } from "./users"

export const routes = Router()

routes.use('/users', users)
