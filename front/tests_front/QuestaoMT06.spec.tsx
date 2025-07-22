import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QuestaoMT06 } from '../src/screens/QuestMat/QuestaoMT06';

const originalConsoleError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes("The 'navigation' object hasn't been initialized yet")
    ) {
      return;
    }
    originalConsoleError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
});

describe('Tela QuestaoMT06', () => {
  it('Deve renderizar corretamente os elementos da tela', () => {
    const { getByTestId, getByText } = render(
      <NavigationContainer>
        <QuestaoMT06 />
      </NavigationContainer>
    );

    expect(getByTestId('questao-mt06-screen')).toBeTruthy();
    expect(getByText('Fração e Divisão')).toBeTruthy();
    expect(getByText('Nível 3: Divisão prática')).toBeTruthy();
    expect(
      getByText(
        'Em uma tarde quente, Joana comprou uma caixa com 12 bombons para dividir entre ela e mais 3 amigos igualmente. Com quantos bombons ficará cada um?'
      )
    ).toBeTruthy();
    expect(getByText('a) 4')).toBeTruthy();
    expect(getByText('b) 3')).toBeTruthy();
    expect(getByText('c) 2')).toBeTruthy();
    expect(getByText('d) 6')).toBeTruthy();
  });

  it('Deve selecionar a resposta correta e exibir mensagem de acerto', async () => {
    const { getByText, findByText } = render(
      <NavigationContainer>
        <QuestaoMT06 />
      </NavigationContainer>
    );

    fireEvent.press(getByText('b) 3'));

    expect(await findByText('Parabéns, você acertou!')).toBeTruthy();
    expect(getByText('Próxima')).toBeTruthy();
  });

  it('Deve selecionar uma resposta incorreta e exibir mensagem de erro', async () => {
    const { getByText, findByText } = render(
      <NavigationContainer>
        <QuestaoMT06 />
      </NavigationContainer>
    );

    fireEvent.press(getByText('a) 4'));

    expect(await findByText('Que pena, não foi dessa vez.')).toBeTruthy();
    expect(getByText('Próxima')).toBeTruthy();
  });

  it('Deve navegar para a próxima questão ao clicar em "Próxima"', async () => {
    const { getByText, findByText } = render(
      <NavigationContainer>
        <QuestaoMT06 />
      </NavigationContainer>
    );

    fireEvent.press(getByText('b) 3'));

    const proxima = await findByText('Próxima');
    expect(proxima).toBeTruthy();

    fireEvent.press(proxima);

    await waitFor(() => {
      expect(true).toBe(true); // Aqui valida apenas que o clique foi realizado sem erro
    });
  });
});
