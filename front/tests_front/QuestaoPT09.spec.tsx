
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { QuestaoPT09 } from '../src/screens/QuestPort/QuestaoPT09';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe('Tela QuestaoPT09', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({ navigate: navigateMock });
  });

  it('Deve renderizar a tela corretamente', () => {
    const { getByTestId } = render(<QuestaoPT09 />);
    const tela = getByTestId('questao-pt09-screen');
    expect(tela).toBeTruthy();
  });

  it('Deve selecionar uma alternativa e avançar', () => {
    const { getByText } = render(<QuestaoPT09 />);
    fireEvent.press(getByText('b) Uma opinião'));
    fireEvent.press(getByText('Próxima'));
    expect(navigateMock).toHaveBeenCalled();
  });
});
