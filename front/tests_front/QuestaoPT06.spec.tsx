
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { QuestaoPT06 } from '../src/screens/QuestPort/QuestaoPT06';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe('Tela QuestaoPT06', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({ navigate: navigateMock });
  });

  it('Deve renderizar a tela corretamente', () => {
    const { getByTestId } = render(<QuestaoPT06 />);
    const tela = getByTestId('questao-pt06-screen');
    expect(tela).toBeTruthy();
  });

  it('Deve selecionar uma alternativa e avançar', () => {
    const { getByText } = render(<QuestaoPT06 />);
    fireEvent.press(getByText('b) Comprei pão, leite, queijo e frutas.'));
    fireEvent.press(getByText('Próxima'));
    expect(navigateMock).toHaveBeenCalled();
  });
});
