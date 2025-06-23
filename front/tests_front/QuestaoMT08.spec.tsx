import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QuestaoMT08 } from '../src/screens/QuestMat/QuestaoMT08';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('Tela QuestaoMT08', () => {
  it('Deve renderizar corretamente a tela e os elementos principais', () => {
    const { getByTestId, getByText } = render(
      <NavigationContainer>
        <QuestaoMT08 />
      </NavigationContainer>
    );

    expect(getByTestId('questao-mt08-screen')).toBeTruthy();
    expect(getByText('Nível 2: Parênteses')).toBeTruthy();
    expect(getByText('Paula resolveu comprar 2 brinquedos\nque custam R$2 e R$3 cada. Depois, ela\ndecidiu dobrar a quantidade de brinquedos.\nQuanto ela gastou no total? (2 + 3) × 2')).toBeTruthy();
    expect(getByText('a) 10')).toBeTruthy();
    expect(getByText('b) 8')).toBeTruthy();
    expect(getByText('c) 6')).toBeTruthy();
    expect(getByText('d) 12')).toBeTruthy();
  });

  it('Deve selecionar uma opção correta e exibir mensagem de acerto', async () => {
    const { getByText, queryByText } = render(
      <NavigationContainer>
        <QuestaoMT08 />
      </NavigationContainer>
    );

    const opcaoCorreta = getByText('a) 10');
    fireEvent.press(opcaoCorreta);

    await waitFor(() => {
      expect(getByText('Parabéns, você acertou!')).toBeTruthy();
      expect(queryByText('Próxima')).toBeTruthy();
    });
  });

  it('Deve selecionar uma opção incorreta e exibir mensagem de erro', async () => {
    const { getByText, queryByText } = render(
      <NavigationContainer>
        <QuestaoMT08 />
      </NavigationContainer>
    );

    const opcaoIncorreta = getByText('b) 8');
    fireEvent.press(opcaoIncorreta);

    await waitFor(() => {
      expect(getByText('Que pena, não foi dessa vez.')).toBeTruthy();
      expect(queryByText('Próxima')).toBeTruthy();
    });
  });
});
