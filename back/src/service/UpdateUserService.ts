import { UsersRepository } from "repositories/UsersRepository";
import { User } from "../entities/User";


type UserUpdateRequest = {
    id : string;
    name: string;
    email: string;
    password: string;

}

export class UpdateUserService {
      constructor(private repository: UsersRepository) {}
    
    async execute({ id, name, email, password }: UserUpdateRequest): Promise<User | Error>{
        const user = await this.repository.findById( id );

        if(!user){
            return new Error("User does not exists!");
        }

        //(await user).name = name;
        //(await user).email = email;
        //(await user).password = password;

        (await user).name = name? name : (await user).name;
        (await user).email = email? email : (await user).email;
        (await user).password = password? password : (await user).password;


        await this.repository.save( await user );

        return user;
    }
}