import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from '../src/routes/app.routes';
import { api } from '../src/services/api';

jest.mock('../src/services/api', () => ({
  api: {
    get: jest.fn(),
  },
}));

const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes("The 'navigation' object hasn't been initialized yet")
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});
afterAll(() => {
  console.error = originalError;
});

jest.setTimeout(30000);

describe('Fluxo completo da Jornada de Português até Parabéns', () => {
  beforeEach(() => {
    (api.get as jest.Mock).mockResolvedValue({
      data: [{ name: 'usuario_teste', password: 'senha_teste' }],
    });
  });

  it('Deve executar todo o fluxo até a tela de Parabéns', async () => {
    const utils = render(
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    );

    // Etapa 1: PreLogin → Login
    await waitFor(() => expect(utils.getByTestId('prelogin-screen')).toBeTruthy());
    fireEvent.press(utils.getByText('Entrar'));
    await waitFor(() => expect(utils.getByTestId('login-screen')).toBeTruthy());
    fireEvent.changeText(utils.getByPlaceholderText('Usuário'), 'usuario_teste');
    fireEvent.changeText(utils.getByPlaceholderText('Senha'), 'senha_teste');
    const botoesLogin = utils.getAllByText('Login');
    fireEvent.press(botoesLogin[1]);

    // Etapa 2: Regras → Home
    await waitFor(() => expect(utils.getByTestId('regras-screen')).toBeTruthy());
    fireEvent.press(utils.getByText('Continuar'));
    await waitFor(() => expect(utils.getByTestId('home-screen')).toBeTruthy());

    // Etapa 3: QuestaoPT01
    const botoesIniciar = utils.getAllByTestId('start-button-iniciar');
    fireEvent.press(botoesIniciar[0]);
    await waitFor(() => expect(utils.getByTestId('questao-pt01-screen')).toBeTruthy());
    fireEvent.press(utils.getByText('c) O menino'));
    fireEvent.press(utils.getByText('Próxima'));

    // Etapa 4: QuestaoPT02
    await waitFor(() => expect(utils.getByTestId('questao-pt02-screen')).toBeTruthy());
    fireEvent.press(utils.getByText('b) Explicou a lição com paciência'));
    fireEvent.press(utils.getByText('Próxima'));

    // Etapa 5: QuestaoPT03
    await waitFor(() => expect(utils.getByTestId('questao-pt03-screen')).toBeTruthy());
    fireEvent.press(utils.getByText('c) Está escondido no verbo, é "eu"'));
    fireEvent.press(utils.getByText('Próxima'));

    // Etapa 6: QuestaoPT04
    await waitFor(() => expect(utils.getByTestId('questao-pt04-screen')).toBeTruthy());
    fireEvent.press(utils.getByText('c) Hoje é terça-feira.'));
    fireEvent.press(utils.getByText('Próxima'));

    // Etapa 7: QuestaoPT05
    await waitFor(() => expect(utils.getByTestId('questao-pt05-screen')).toBeTruthy());
    fireEvent.press(utils.getByText('a) Maria disse — quero ir embora.'));
    fireEvent.press(utils.getByText('Próxima'));

    // Etapa 8: QuestaoPT06
    await waitFor(() => expect(utils.getByTestId('questao-pt06-screen')).toBeTruthy());
    fireEvent.press(utils.getByText('b) Comprei pão, leite, queijo e frutas.'));
    fireEvent.press(utils.getByText('Próxima'));

    // Etapa 9: QuestaoPT07
    await waitFor(() => expect(utils.getByTestId('questao-pt07-screen')).toBeTruthy());
    fireEvent.press(utils.getByText('d) Foi à escola'));
    fireEvent.press(utils.getByText('Próxima'));

    // Etapa 10: QuestaoPT08
    await waitFor(() => expect(utils.getByTestId('questao-pt08-screen')).toBeTruthy());
    fireEvent.press(utils.getByText('c) Para o mercado'));
    fireEvent.press(utils.getByText('Próxima'));

    // Etapa 11: QuestaoPT09
    await waitFor(() => expect(utils.getByTestId('questao-pt09-screen')).toBeTruthy());
    fireEvent.press(utils.getByText('b) Uma opinião'));
    fireEvent.press(utils.getByText('Próxima'));

    // Tela de Parabéns
    await waitFor(() => expect(utils.getByTestId('parabens-screen')).toBeTruthy());
  });
});
