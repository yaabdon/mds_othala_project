import { UsersRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";

export class ListUsersService {
  constructor(private repository: UsersRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.repository.findAll();
    return users;
  }
}
