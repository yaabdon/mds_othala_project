import request from 'supertest';
import app from '../back/src/serve'; 

describe('Integração: Criar usuário', () => {
  it('deve criar um novo usuário com sucesso', async () => {
    const response = await request(app).post('/users').send({
      nome: 'Test User',
      email: 'test@example.com',
      senha: '123456',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
