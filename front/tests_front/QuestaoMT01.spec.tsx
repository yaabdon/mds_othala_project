import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { QuestaoMT01 } from '../src/screens/QuestMat/QuestaoMT01';
import { useNavigation } from '@react-navigation/native';
import Linking from 'react-native/Libraries/Linking/Linking';

// Mock da navegação
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

// Mock do Linking
jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(),
}));

describe('Tela QuestaoMT01', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigation as jest.Mock).mockReturnValue({ navigate: navigateMock });
  });

  it('Deve renderizar corretamente os textos principais e as opções', () => {
    const { getByText } = render(<QuestaoMT01 />);

    expect(getByText('Tabuada')).toBeTruthy();
    expect(getByText('Nível 1: Tabuada do 2')).toBeTruthy();
    expect(
      getByText(
        /Léo está indo ao parque com seus amigos e cada um leva sua bicicleta/i
      )
    ).toBeTruthy();

    expect(getByText('a) 4')).toBeTruthy();
    expect(getByText('b) 6')).toBeTruthy();
    expect(getByText('c) 2')).toBeTruthy();
    expect(getByText('d) 8')).toBeTruthy();
  });

  it('Deve selecionar uma opção correta e exibir a mensagem de acerto', async () => {
    const { getByText } = render(<QuestaoMT01 />);

    const opcaoCorreta = getByText('b) 6');

    fireEvent.press(opcaoCorreta);

    await waitFor(() => {
      expect(getByText('Parabéns, você acertou!')).toBeTruthy();
      expect(getByText('Próxima')).toBeTruthy();
    });
  });

  it('Deve selecionar uma opção incorreta e exibir a mensagem de erro', async () => {
    const { getByText } = render(<QuestaoMT01 />);

    const opcaoErrada = getByText('a) 4');

    fireEvent.press(opcaoErrada);

    await waitFor(() => {
      expect(getByText('Que pena, não foi dessa vez.')).toBeTruthy();
      expect(getByText('Próxima')).toBeTruthy();
    });
  });

  it('Deve navegar para a próxima questão ao clicar em "Próxima"', async () => {
    const { getByText } = render(<QuestaoMT01 />);

    const opcaoCorreta = getByText('b) 6');
    fireEvent.press(opcaoCorreta);

    const botaoProxima = await waitFor(() => getByText('Próxima'));

    fireEvent.press(botaoProxima);

    expect(navigateMock).toHaveBeenCalledWith('QuestaoMT02');
  });
});
