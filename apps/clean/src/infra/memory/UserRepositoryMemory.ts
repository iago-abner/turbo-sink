import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/use-cases/repositories/user-repository";

export class UserRepositoryMemory implements UserRepository{
  constructor(private users: User[]) { }

  async create(user: User): Promise<User> {
    const newUser = { ...user, id: Math.random().toString(36).substring(2,9) }
    this.users.push(newUser)
    return newUser
  }
  async findByName(name: string): Promise<User | null> {
    const res = this.users.find(user => user.name === name) || null
    return res
  }

  async delete(id: string): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    } else {
      throw new Error('Usuário não encontrado');
    }
  }

  async list(): Promise<any> {
    return this.users;
  }

  async update(id: string, user: User): Promise<User> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = user;
      return this.users[userIndex];
    } else {
      throw new Error('Usuário não encontrado');
    }
  }
}
