import { User } from "../entities/User";

export interface UsersRepository{
    findByName(name: string): Promise<User | undefined>
    save(user: Partial<User>): Promise<User | undefined>
}