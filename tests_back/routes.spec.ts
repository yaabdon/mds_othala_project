import request from "supertest";
import { app } from "../src/app";  
import { AppDataSource } from "../src/database";

describe("Testes das rotas /users", () => {
  beforeAll(async () => {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
    await AppDataSource.query(`DELETE FROM "Users"`);
  });

  it("POST /users - deve criar um novo usuário", async () => {
    const response = await request(app).post("/users").send({
      name: "Maria",
      email: "maria@example.com",
      password: "123456",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Maria");
  });

  it("POST /users - não deve criar usuário com email duplicado", async () => {
    const response = await request(app).post("/users").send({
      name: "Maria",
      email: "maria@example.com",
      password: "123456",
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toMatch(/already exists/i);
  });

  it("PUT /users/:id - deve atualizar o usuário", async () => {
    // Primeiro criar usuário para pegar o id
    const createResponse = await request(app).post("/users").send({
      name: "Carlos",
      email: "carlos@example.com",
      password: "123456",
    });

    const userId = createResponse.body.id;

    // Atualizar usuário
    const updateResponse = await request(app).put(`/users/${userId}`).send({
      name: "Carlos Silva",
      email: "carlossilva@example.com",
      password: "654321",
    });

    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body.name).toBe("Carlos Silva");
  });

  it("DELETE /users/:id - deve deletar usuário", async () => {
    // Criar usuário para deletar
    const createResponse = await request(app).post("/users").send({
      name: "Ana",
      email: "ana@example.com",
      password: "123456",
    });

    const userId = createResponse.body.id;

    // Deletar usuário
    const deleteResponse = await request(app).delete(`/users/${userId}`);

    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body).toHaveProperty("message");
    expect(deleteResponse.body.message).toMatch(/deletado/i);
  });

});
