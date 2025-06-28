import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PreLogin } from '../src/screens/PreLogin/index';

describe('Tela PreLogin', () => {
  it('Deve renderizar a tela PreLogin corretamente', () => {
    const { getByTestId, getByText } = render(
      <NavigationContainer>
        <PreLogin />
      </NavigationContainer>
    );

    expect(getByTestId('prelogin-screen')).toBeTruthy();
    expect(getByText('Sua jornada de estudos começa aqui')).toBeTruthy();
    expect(getByText('Omega Ω')).toBeTruthy();
    expect(getByText('Entrar')).toBeTruthy();
  });

  it('Deve navegar para a tela de Login ao clicar no botão Entrar', () => {
    const { getByText } = render(
      <NavigationContainer>
        <PreLogin />
      </NavigationContainer>
    );

    const botao = getByText('Entrar');
    fireEvent.press(botao);
    
  });
});
