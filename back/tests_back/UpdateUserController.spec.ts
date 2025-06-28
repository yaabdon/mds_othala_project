import { UpdateUserController } from "../src/controllers/UpdateUserController";
import { ClassUsersRepository } from "../src/repositories/ClassUsersRepository";
import { AppDataSource } from "../src/database";
import { UpdateUserService } from "../src/service/UpdateUserService";

jest.mock("../src/database");
jest.mock("../src/repositories/ClassUsersRepository");
jest.mock("../src/service/UpdateUserService");

describe("UpdateUserController", () => {
  let requestMock: any;
  let responseMock: any;

  beforeEach(() => {
    requestMock = {
      params: { id: "1" },
      body: { name: "Novo Nome", email: "novo@example.com", password: "senha123" }
    };

    responseMock = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  it("atualiza um usuário com sucesso", async () => {
    const updatedUser = { id: "1", ...requestMock.body };

    (UpdateUserService as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockResolvedValue(updatedUser)
    }));

    const controller = new UpdateUserController();
    await controller.handle(requestMock, responseMock);

    expect(responseMock.json).toHaveBeenCalledWith(updatedUser);
  });

  it("retorna erro 400 se UpdateUserService retorna um Error", async () => {
    const error = new Error("Usuário não encontrado");

    (UpdateUserService as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockResolvedValue(error)
    }));

    const controller = new UpdateUserController();
    await controller.handle(requestMock, responseMock);

    expect(responseMock.status).toHaveBeenCalledWith(400);
    expect(responseMock.json).toHaveBeenCalledWith(error.message);
  });
});
