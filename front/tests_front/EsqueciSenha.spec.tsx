import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { EsqueciSenha } from '../src/screens/EsqueciSenha';

describe('EsqueciSenha', () => {
  it('deve renderizar corretamente os campos e botão', () => {
    const { getByText, getByPlaceholderText } = render(
      <NavigationContainer>
        <EsqueciSenha />
      </NavigationContainer>
    );

    // Título
    getByText('Nova Senha');

    // Inputs
    getByPlaceholderText('Digite seu e-mail');
    getByPlaceholderText('Digite sua nova senha');

    // Botão
    getByText('Recuperar');
  });
});
