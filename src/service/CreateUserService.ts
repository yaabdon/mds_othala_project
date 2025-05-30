import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

type userRequest = {
  name: string;
  email: string;
  password: string;
};

export class CreateUserService {
  constructor(private repository: UsersRepository) {}

  async execute({ name, email, password }: userRequest): Promise<User | Error> {
    const userExists = await this.repository.findByName(name);

    if (userExists) {
      return new Error("Category already exists");
    }
    const user = this.repository.save({ name, email, password });
    console.log(`${name} save`)
    return user
  }
}
