import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from '../src/routes/app.routes';
import { api } from '../src/services/api';

// Mock da API
jest.mock('../src/services/api', () => ({
  api: {
    get: jest.fn(),
  },
}));

// Ignorar erro de navegação não inicializada
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

jest.setTimeout(30000); // Aumenta o timeout dos testes

describe('Fluxo da Jornada de Português até a QuestaoPT01', () => {
  beforeEach(() => {
    (api.get as jest.Mock).mockResolvedValue({
      data: [{ name: 'usuario_teste', password: 'senha_teste' }],
    });
  });

  it('Deve navegar PreLogin → Login → Regras → Home → QuestaoPT01', async () => {
    const { 
      getByText, 
      getAllByText, 
      getByTestId, 
      getByPlaceholderText, 
      getAllByTestId 
    } = render(
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    );

    //  PreLogin
    await waitFor(() => {
      expect(getByTestId('prelogin-screen')).toBeTruthy();
    });

    const botaoEntrar = getByText('Entrar');
    fireEvent.press(botaoEntrar);

    await waitFor(() => {
      expect(getByTestId('login-screen')).toBeTruthy();
    });

    //  Login
    fireEvent.changeText(getByPlaceholderText('Usuário'), 'usuario_teste');
    fireEvent.changeText(getByPlaceholderText('Senha'), 'senha_teste');

    const botoesLogin = getAllByText('Login');
    const botaoLogin = botoesLogin[1]; // [0] é título, [1] é botão
    fireEvent.press(botaoLogin);

    await waitFor(() => {
      expect(getByTestId('regras-screen')).toBeTruthy();
    });

    //  Regras → Home
    const botaoContinuar = getByText('Continuar');
    fireEvent.press(botaoContinuar);

    await waitFor(() => {
      expect(getByTestId('home-screen')).toBeTruthy();
    });

    //  Home → QuestaoPT01
    const botoesIniciar = getAllByTestId('start-button-iniciar');
    const botaoIrParaPortugues = botoesIniciar[0]; // Primeiro botão é Jornada de Português
    fireEvent.press(botaoIrParaPortugues);

    await waitFor(() => {
      expect(getByTestId('questao-pt01-screen')).toBeTruthy();
    });

    // Fim do teste — Para na QuestaoPT01
    expect(getByTestId('questao-pt01-screen')).toBeTruthy();

    console.log('Teste finalizado até a QuestaoPT01 com sucesso!');

    const utils = render(
    <NavigationContainer>
        <AppRoutes />
    </NavigationContainer>
    );

    expect(getByTestId('questao-pt01-screen')).toBeTruthy();
    await waitFor(() => {});
    utils.unmount();
    });
});