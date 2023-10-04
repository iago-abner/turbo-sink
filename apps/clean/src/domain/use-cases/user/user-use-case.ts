import { UserUseCase } from "../interfaces/user";
import { UserRepository } from "../repositories/user-repository";

type UserInput = { name: string, email: string }

export class UserUseCases implements UserUseCase<UserInput, void> {
  constructor(private readonly repository: UserRepository) { }

  async create(input: UserInput): Promise<void> {
    const { name, email } = input;
    const userExists = await this.repository.findByName(name)

    if (userExists) throw new Error('User already exists')

    await this.repository.create({name, email})
  }

  async delete(id: string): Promise<void> {
    try {
      await this.repository.delete(id);
    } catch (error) {
      throw new Error('Error deleting user');
    }
  }

  async list(): Promise<any> {
    return this.repository.list();
  }

  async update(id: string, input: UserInput): Promise<void> {
    try {
      const { name, email } = input;
      const userExists = await this.repository.findByName(name)

      if (userExists) throw new Error('User already exists')

      await this.repository.update(id, {name, email});
    } catch (error) {
      throw new Error('Error updating user');
    }
  }
}
