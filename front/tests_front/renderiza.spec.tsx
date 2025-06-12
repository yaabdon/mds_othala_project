import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

describe('Exemplo de teste', () => {
  it('deve renderizar o texto corretamente', () => {
    const { getByText } = render(<Text>Olá, mundo!</Text>);
    expect(getByText('Olá, mundo!')).toBeTruthy();
  });
});
