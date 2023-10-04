import { User } from "../../entities/user";

export interface UserRepository {
  create(user: User): Promise<User>;
  findByName(name: string): Promise<User | null>;
  delete(id: string): Promise<void>;
  list(): Promise<any>;
  update(id: string, user: User): Promise<User>;
}
