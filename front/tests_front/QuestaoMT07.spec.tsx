import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QuestaoMT07 } from '../src/screens/QuestMat/QuestaoMT07';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('Tela QuestaoMT07', () => {
  it('Deve renderizar corretamente a tela de questão', () => {
    const { getByTestId, getByText } = render(
      <NavigationContainer>
        <QuestaoMT07 />
      </NavigationContainer>
    );

    expect(getByTestId('questao-mt07-screen')).toBeTruthy();
    expect(getByText('Nível 1: Soma simples')).toBeTruthy();
    expect(
      getByText(
        'Carlos juntou 3 figurinhas pela manhã e mais 5 à tarde. Com quantas figurinhas ele ficou no total?'
      )
    ).toBeTruthy();
  });

  it('Deve selecionar a alternativa correta e exibir mensagem de acerto', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT07 />
      </NavigationContainer>
    );

    const opcaoCorreta = getByText('a) 9');
    fireEvent.press(opcaoCorreta);

    await waitFor(() => {
      expect(getByText('Parabéns, você acertou!')).toBeTruthy();
    });
  });

  it('Deve selecionar uma alternativa incorreta e exibir mensagem de erro', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT07 />
      </NavigationContainer>
    );

    const opcaoErrada = getByText('b) 7');
    fireEvent.press(opcaoErrada);

    await waitFor(() => {
      expect(getByText('Que pena, não foi dessa vez.')).toBeTruthy();
    });
  });

  it('Deve navegar para a próxima questão após selecionar uma opção', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT07 />
      </NavigationContainer>
    );

    const opcaoCorreta = getByText('a) 9');
    fireEvent.press(opcaoCorreta);

    await waitFor(() => {
      const botaoProxima = getByText('Próxima');
      expect(botaoProxima).toBeTruthy();
      fireEvent.press(botaoProxima);
    });
  });
});
