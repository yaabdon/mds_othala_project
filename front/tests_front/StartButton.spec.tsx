import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { StartButton } from '../src/components/StartButton';

describe('Componente StartButton', () => {
  it('Deve renderizar corretamente o botão de iniciar', () => {
    const { getByTestId } = render(
      <StartButton onPress={() => {}} />
    );

    const botao = getByTestId('start-button-iniciar');
    expect(botao).toBeTruthy();
  });

  it('Deve chamar a função onPress ao pressionar o botão', () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(
      <StartButton onPress={onPressMock} />
    );

    const botao = getByTestId('start-button-iniciar');
    fireEvent.press(botao);

    expect(onPressMock).toHaveBeenCalled();
  });
});
