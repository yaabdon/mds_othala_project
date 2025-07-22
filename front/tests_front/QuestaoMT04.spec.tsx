import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QuestaoMT04 } from '../src/screens/QuestMat/QuestaoMT04';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('Tela QuestaoMT04', () => {
  it('Deve renderizar corretamente a tela e seus componentes', () => {
    const { getByTestId, getByText } = render(
      <NavigationContainer>
        <QuestaoMT04 />
      </NavigationContainer>
    );

    expect(getByTestId('questao-mt04-screen')).toBeTruthy();
    expect(getByText('Fração e Divisão')).toBeTruthy();
    expect(getByText('Ana preparou um bolo delicioso e decidiu dividir com seu irmão. Ela cortou o bolo em duas partes iguais. Em quantas partes o bolo ficou?')).toBeTruthy();
  });

  it('Deve selecionar a alternativa correta e exibir a mensagem de acerto', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT04 />
      </NavigationContainer>
    );

    const alternativaCorreta = getByText('b) 2');
    fireEvent.press(alternativaCorreta);

    await waitFor(() => {
      expect(getByText('Parabéns, você acertou!')).toBeTruthy();
    });
  });

  it('Deve selecionar a alternativa incorreta e exibir a mensagem de erro', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT04 />
      </NavigationContainer>
    );

    const alternativaErrada = getByText('a) 4');
    fireEvent.press(alternativaErrada);

    await waitFor(() => {
      expect(getByText('Que pena, não foi dessa vez.')).toBeTruthy();
    });
  });

  it('Deve navegar para a próxima questão ao clicar em "Próxima"', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT04 />
      </NavigationContainer>
    );

    const alternativaCorreta = getByText('b) 2');
    fireEvent.press(alternativaCorreta);

    const botaoProxima = await waitFor(() => getByText('Próxima'));
    fireEvent.press(botaoProxima);
  });
});
