import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Question } from "../entities/Question";

export class CreateQuestionController {
  async handle(req: Request, res: Response) {
    const { titulo, descricao } = req.body;

    if (!titulo || !descricao) {
      return res.status(400).json({ mensagem: "Título e descrição são obrigatórios." });
    }

    const questionRepo = AppDataSource.getRepository(Question);

    const pergunta = questionRepo.create({ titulo, descricao });

    await questionRepo.save(pergunta);

    return res.status(200).json(pergunta);
  }
}
