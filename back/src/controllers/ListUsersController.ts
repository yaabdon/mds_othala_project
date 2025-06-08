import { Request, Response } from "express";
import { ClassUsersRepository } from "../repositories/ClassUsersRepository";
import { ListUsersService } from "../service/ListUsersService";
import { AppDataSource } from "../database";

export class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
    const repository = new ClassUsersRepository(AppDataSource);
    const service = new ListUsersService(repository);
    const users = await service.execute();
    return response.json(users);
  }
}
