import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../src/components/Button';
import { useNavigation } from '@react-navigation/native';

// Mock da navegação
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe('Componente Button', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({ navigate: navigateMock });
  });

  it('Deve renderizar corretamente o botão', () => {
    const { getByTestId } = render(
      <Button title="Continuar" onPress={navigateMock} />
    );

    const botao = getByTestId('button-continuar');
    expect(botao).toBeTruthy();
  });

  it('Deve chamar a função navigate ao pressionar o botão', () => {
    const { getByTestId } = render(
      <Button title="Continuar" onPress={navigateMock} />
    );

    const botao = getByTestId('button-continuar');
    fireEvent.press(botao);

    expect(navigateMock).toHaveBeenCalled();
  });

});
