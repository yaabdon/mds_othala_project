import { AppDataSource } from "../src/database";
import { ClassUsersRepository } from "../src/repositories/ClassUsersRepository";
import { CreateUserService } from "../src/service/CreateUserService";

describe("CreateUserService", () => {
  beforeAll(async () => {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      await AppDataSource.query(`DELETE FROM "Users"`);
    }
  });

  it("Cria um novo usuário com sucesso", async () => {
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

  it("Não permite criar usuário duplicado com mesmo email", async () => {
    const repository = new ClassUsersRepository(AppDataSource);
    const service = new CreateUserService(repository);

    const result = await service.execute({
      name: "João da Silva",
      email: "joao@example.com", // mesmo email do usuário criado acima
      password: "123456",
    });

    // Verifica se o resultado possui uma propriedade 'message' indicando erro:
    expect(result).toHaveProperty("message");

    if ("message" in result) {
      expect(result.message).toMatch(/already exists/i);
    }
  });


});
