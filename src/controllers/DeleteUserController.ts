import { Request, Response } from 'express';
import { ClassUsersRepository } from '../repositories/ClassUsersRepository'; 
import { AppDataSource } from '../database';


export class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        try {
            if (!AppDataSource.isInitialized) {
                await AppDataSource.initialize();
            }
            const repository = new ClassUsersRepository(AppDataSource);
            const user = await repository.findByIdAndDelete(id);

            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }

            return res.status(200).json({ message: 'Usuário deletado com sucesso', user });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    }
}