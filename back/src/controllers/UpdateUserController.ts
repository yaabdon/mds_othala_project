import { Request, Response } from "express";
import { ClassUsersRepository } from "../repositories/ClassUsersRepository";
import { UpdateUserService } from "../service/UpdateUserService";
import { AppDataSource } from "../database";



export class UpdateUserController {
    async handle(request: Request, response: Response) {
       
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize();
        }

        const { id } = request.params;
        const { name, email, password } = request.body;

        const repository = new ClassUsersRepository(AppDataSource);
        const service = new UpdateUserService(repository);
        const result = await service.execute({id,name,email,password});

        if(result instanceof Error){
            return response.status(400).json(result.message);

        }

        return response.json(result);

        

        
    }
}