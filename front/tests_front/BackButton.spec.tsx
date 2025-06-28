import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { BackButton } from '../src/components/BackButton';
import { useNavigation } from '@react-navigation/native';

// Mock da navegação
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe('Componente BackButton', () => {
  const goBackMock = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({ goBack: goBackMock });
  });

  it('Deve renderizar corretamente o botão de voltar', () => {
    const { getByTestId } = render(<BackButton />);

    const botao = getByTestId('back-button');
    expect(botao).toBeTruthy();
  });

  it('Deve chamar a função goBack ao pressionar o botão', () => {
    const { getByTestId } = render(<BackButton />);

    const botao = getByTestId('back-button');
    fireEvent.press(botao);

    expect(goBackMock).toHaveBeenCalled();
  });
});
