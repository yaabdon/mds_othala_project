import http from 'http';

const userId = 'id'; //Colocar id do usuário(ainda não existe seed)

const options = {
  hostname: 'localhost',
  port: 3000,
  path: `/users/${userId}`,
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Resposta:', data);
  });
});

req.on('error', (error) => {
  console.error('Erro:', error);
});

req.end();