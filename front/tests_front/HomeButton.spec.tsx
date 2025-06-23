import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { HomeButton } from '../src/components/HomeButton';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe('Componente HomeButton', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({ navigate: navigateMock });
  });

  it('Deve renderizar corretamente o botão de home', () => {
    const { getByTestId } = render(<HomeButton />);
    const botao = getByTestId('home-button');
    expect(botao).toBeTruthy();
  });

  it('Deve chamar a função navigate ao pressionar o botão', () => {
    const { getByTestId } = render(<HomeButton />);
    const botao = getByTestId('home-button');
    fireEvent.press(botao);
    expect(navigateMock).toHaveBeenCalled();
  });
});
