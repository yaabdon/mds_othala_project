
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { QuestaoPT08 } from '../src/screens/QuestPort/QuestaoPT08';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe('Tela QuestaoPT08', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({ navigate: navigateMock });
  });

  it('Deve renderizar a tela corretamente', () => {
    const { getByTestId } = render(<QuestaoPT08 />);
    const tela = getByTestId('questao-pt08-screen');
    expect(tela).toBeTruthy();
  });

  it('Deve selecionar uma alternativa e avançar', () => {
    const { getByText } = render(<QuestaoPT08 />);
    fireEvent.press(getByText('c) Para o mercado'));
    fireEvent.press(getByText('Próxima'));
    expect(navigateMock).toHaveBeenCalled();
  });
});
