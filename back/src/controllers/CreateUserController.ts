import { Request, Response } from "express";
import { ClassUsersRepository } from "../repositories/ClassUsersRepository";
import { CreateUserService } from "../service/CreateUserService";
import { AppDataSource } from "../database";

export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize();
        }

        const repository = new ClassUsersRepository(AppDataSource);
        const service = new CreateUserService(repository);

        const result = await service.execute({ name, email, password });

        if (result instanceof Error) {
            return response.status(400).json({ error: result.message });
        }

        return response.status(201).json(result);
    }
}
