import { User } from "../../domain/entities/user"
import { UserUseCases } from "../../domain/use-cases/user/user-use-case"
import { UserRepositoryMemory } from "../../infra/memory/UserRepositoryMemory"
import { UserController } from "./user-controller"
import express from 'express'

const users: User[] = []
const userRepository = new UserRepositoryMemory(users)
const userUseCase = new UserUseCases(userRepository)
const useController = new UserController(userUseCase, express())

export { useController }
