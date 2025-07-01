import request from 'supertest';
import app from '../src/serve';
import { AppDataSource } from '../src/database';
import { User } from '../src/entities/User';

describe('Fluxo criar usuário e atualizar senha', () => {
  const testEmail = `testuser_${Date.now()}@example.com`;
  const oldPassword = 'SenhaAntiga123';
  const newPassword = 'NovaSenha456';
  let createdUserId: string;

  afterAll(async () => {
    await AppDataSource.getRepository(User).delete({ email: testEmail });
    await AppDataSource.destroy();
  });

  it('Deve criar usuário e atualizar senha', async () => {
    // 1. Criar usuário
    const createRes = await request(app)
      .post('/users')
      .send({
        name: 'Test User',
        email: testEmail,
        password: oldPassword,
      })
      .expect(201);

    expect(createRes.body).toHaveProperty('id');
    createdUserId = createRes.body.id;

    // 2. Atualizar senha
    const updateRes = await request(app)
      .put(`/users/${createdUserId}`)
      .send({
        password: newPassword,
      })
      .expect(200);

    // Confere que retornou o usuário atualizado
    expect(updateRes.body).toHaveProperty('id', createdUserId);
    expect(updateRes.body).toHaveProperty('email', testEmail);
  });
});
