
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { QuestaoPT05 } from '../src/screens/QuestPort/QuestaoPT05';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe('Tela QuestaoPT05', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({ navigate: navigateMock });
  });

  it('Deve renderizar a tela corretamente', () => {
    const { getByTestId } = render(<QuestaoPT05 />);
    const tela = getByTestId('questao-pt05-screen');
    expect(tela).toBeTruthy();
  });

  it('Deve selecionar uma alternativa e avançar', () => {
    const { getByText } = render(<QuestaoPT05 />);
    fireEvent.press(getByText('a) Maria disse — quero ir embora.'));
    fireEvent.press(getByText('Próxima'));
    expect(navigateMock).toHaveBeenCalled();
  });
});
