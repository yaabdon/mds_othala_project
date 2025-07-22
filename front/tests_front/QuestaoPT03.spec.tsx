
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { QuestaoPT03 } from '../src/screens/QuestPort/QuestaoPT03';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe('Tela QuestaoPT03', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({ navigate: navigateMock });
  });

  it('Deve renderizar a tela corretamente', () => {
    const { getByTestId } = render(<QuestaoPT03 />);
    const tela = getByTestId('questao-pt03-screen');
    expect(tela).toBeTruthy();
  });

  it('Deve selecionar uma alternativa e avançar', () => {
    const { getByText } = render(<QuestaoPT03 />);
    fireEvent.press(getByText('c) Está escondido no verbo, é "eu"'));
    fireEvent.press(getByText('Próxima'));
    expect(navigateMock).toHaveBeenCalled();
  });
});
