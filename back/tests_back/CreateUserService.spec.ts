import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });


import { AppDataSource } from "../src/database";
import { ClassUsersRepository } from "../src/repositories/ClassUsersRepository";
import { CreateUserService } from "../src/service/CreateUserService";



 beforeAll(async () => {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
  });

  beforeEach(async () => {
    await AppDataSource.query(`DELETE FROM "Users"`);
  });

  afterAll(async () => {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
  });

describe("CreateUserService (integração)", () => {
 
  it("cria um novo usuário com sucesso", async () => {
    const repository = new ClassUsersRepository(AppDataSource);
    const service = new CreateUserService(repository);

    

    const result = await service.execute({
      name: "João da Silva",
      email: "joao@email.com",
      password: "123456",
    });

    if (result instanceof Error) {
      throw new Error(`Retornou erro: ${result.message}`);
    }

    expect(result).toHaveProperty("id");
    expect(result.name).toBe("João da Silva");
    expect(result.email).toBe("joao@email.com");
  });

  it("não permite criar usuário duplicado com mesmo email", async () => {
    const repository = new ClassUsersRepository(AppDataSource);
    const service = new CreateUserService(repository);

    // Cria o usuário pela primeira vez
    await service.execute({
      name: "João da Silva",
      email: "joao@example.com",
      password: "123456",
    });

    // Tenta criar o mesmo usuário novamente
    const result = await service.execute({
      name: "João da Silva",
      email: "joao@example.com",
      password: "123456",
    });

    expect(result).toHaveProperty("message");

    if ("message" in result) {
      expect(result.message).toMatch(/already exists/i);
    }
  });
});
