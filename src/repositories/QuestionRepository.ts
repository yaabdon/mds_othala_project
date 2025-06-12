import { AppDataSource } from "../database";
import { Repository } from "typeorm";
import { Question } from "../entities/Question";

export const QuestionRepository: Repository<Question> = AppDataSource.getRepository(Question);
