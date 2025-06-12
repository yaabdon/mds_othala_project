import { Request, Response } from "express";
import { DeleteUserController } from "../src/controllers/DeleteUserController";
import { ClassUsersRepository } from "../src/repositories/ClassUsersRepository";
import { AppDataSource } from "../src/database";



jest.mock("../src/database");
jest.mock("../src/repositories/ClassUsersRepository");


describe("DeleteUserController", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;
  let deleteUserController: DeleteUserController;

  beforeEach(() => {
    req = { params: { id: "1" } };
    jsonMock = jest.fn();
    statusMock = jest.fn(() => ({ json: jsonMock })) as any;
    res = { status: statusMock } as any;

    deleteUserController = new DeleteUserController();
  });

  it("Deleta um usuário existente", async () => {
    (AppDataSource.isInitialized as boolean) = true;

    const fakeUser = { id: "1", name: "João" };
    (ClassUsersRepository as jest.Mock).mockImplementation(() => ({
      findByIdAndDelete: jest.fn().mockResolvedValue(fakeUser),
    }));

    await deleteUserController.handle(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Usuário deletado com sucesso",
      user: fakeUser,
    });
  });

  it("Retorna 404 se o usuário não existir", async () => {
    (AppDataSource.isInitialized as boolean) = true;

    (ClassUsersRepository as jest.Mock).mockImplementation(() => ({
      findByIdAndDelete: jest.fn().mockResolvedValue(null),
    }));

    await deleteUserController.handle(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({
      error: "Usuário não encontrado",
    });
  });

  it("Retorna 500 em caso de erro", async () => {
    (AppDataSource.isInitialized as boolean) = true;

    (ClassUsersRepository as jest.Mock).mockImplementation(() => {
      throw new Error("DB error");
    });

    await deleteUserController.handle(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      error: "Erro ao deletar usuário",
    });
  });
});
