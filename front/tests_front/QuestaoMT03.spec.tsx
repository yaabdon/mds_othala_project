import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { QuestaoMT03 } from '../src/screens/QuestMat/QuestaoMT03';
import { NavigationContainer } from '@react-navigation/native';

// Mock da navegação
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('Tela QuestaoMT03', () => {
  it('Deve renderizar corretamente os textos e botões', () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <QuestaoMT03 />
      </NavigationContainer>
    );

    expect(getByTestId('questao-mt03-screen')).toBeTruthy();
    expect(getByText('Na escola de Lucas, há 12 salas de aula, e cada sala tem 6 carteiras.Quantas carteiras há ao todo na escola?')).toBeTruthy();
    expect(getByText('a) 72')).toBeTruthy();
    expect(getByText('b) 36')).toBeTruthy();
    expect(getByText('c) 48')).toBeTruthy();
    expect(getByText('d) 70')).toBeTruthy();
  });

  it('Deve selecionar a alternativa correta e exibir mensagem de acerto', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT03 />
      </NavigationContainer>
    );

    fireEvent.press(getByText('a) 72'));

    await waitFor(() => {
      expect(getByText('Parabéns, você acertou!')).toBeTruthy();
    });
  });

  it('Deve selecionar uma alternativa incorreta e exibir mensagem de erro', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT03 />
      </NavigationContainer>
    );

    fireEvent.press(getByText('b) 36'));

    await waitFor(() => {
      expect(getByText('Que pena, não foi dessa vez.')).toBeTruthy();
    });
  });
});
