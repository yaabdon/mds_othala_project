import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QuestaoMT02 } from '../src/screens/QuestMat/QuestaoMT02';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('Tela QuestaoMT02', () => {
  it('Deve renderizar corretamente a tela QuestaoMT02', () => {
    const { getByTestId, getByText } = render(
      <NavigationContainer>
        <QuestaoMT02 />
      </NavigationContainer>
    );

    expect(getByTestId('questao-mt02-screen')).toBeTruthy();
    expect(
      getByText(
        'Marina comprou 6 pacotes de bala para distribuir na festa de aniversário. Cada pacote tem 7 balas dentro. Quantas balas ela terá ao todo para compartilhar com os amigos?'
      )
    ).toBeTruthy();
  });

  it('Deve selecionar a resposta correta e exibir mensagem de acerto', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT02 />
      </NavigationContainer>
    );

    const opcaoCorreta = getByText('c) 42');
    fireEvent.press(opcaoCorreta);

    await waitFor(() => {
      expect(getByText('Parabéns, você acertou!')).toBeTruthy();
    });
  });

  it('Deve selecionar a resposta incorreta e exibir mensagem de erro', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT02 />
      </NavigationContainer>
    );

    const opcaoIncorreta = getByText('a) 9');
    fireEvent.press(opcaoIncorreta);

    await waitFor(() => {
      expect(getByText('Que pena, não foi dessa vez.')).toBeTruthy();
    });
  });

  it('Deve navegar para a próxima questão ao clicar no botão "Próxima"', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT02 />
      </NavigationContainer>
    );

    const opcaoCorreta = getByText('c) 42');
    fireEvent.press(opcaoCorreta);

    const botaoProxima = await waitFor(() => getByText('Próxima'));
    expect(botaoProxima).toBeTruthy();

    fireEvent.press(botaoProxima);
    // Aqui você pode verificar se o navigate foi chamado, se mockar corretamente a navegação
  });
});
