import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { QuestaoPT01 } from '../src/screens/QuestPort/QuestaoPT01';
import { useNavigation } from '@react-navigation/native';

// Mock da navegação
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe('Tela QuestaoPT01', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigation as jest.Mock).mockReturnValue({ navigate: navigateMock });
  });

  it('Deve renderizar os elementos corretamente', () => {
    const { getByText } = render(<QuestaoPT01 />);

    expect(getByText('Portugues1')).toBeTruthy();
    expect(getByText('Próxima')).toBeTruthy();
  });

  it('Deve navegar para QuestaoPT02 ao clicar em "Próxima"', () => {
    const { getByText } = render(<QuestaoPT01 />);

    const botaoProxima = getByText('Próxima');
    fireEvent.press(botaoProxima);

    expect(navigateMock).toHaveBeenCalledWith('QuestaoPT02');
  });
});
