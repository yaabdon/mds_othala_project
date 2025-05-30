import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "./UsersRepository";
import { Repository  } from "typeorm";

export class ClassUsersRepository implements UsersRepository{
    private repo: Repository<User>;

    constructor(private dataSource:  DataSource){
        this.repo = this.dataSource.getRepository(User)
    }

    async findById(id: string): Promise<User> {
        const findUser = this.repo.findOneBy({ id })
        return findUser;
    }


    async findByName(name: string): Promise<User | undefined> {
        return this.repo.findOne({where: {name}})
    }
    async save(user: Partial<User>): Promise<User | undefined> {
        return await this.repo.save(user)
    }

}