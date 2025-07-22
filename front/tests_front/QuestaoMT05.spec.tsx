import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QuestaoMT05 } from '../src/screens/QuestMat/QuestaoMT05';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
  };
});

describe('Tela QuestaoMT05', () => {
  it('Deve renderizar corretamente todos os elementos', () => {
    const { getByTestId, getByText } = render(
      <NavigationContainer>
        <QuestaoMT05 />
      </NavigationContainer>
    );

    expect(getByTestId('questao-mt05-screen')).toBeTruthy();
    expect(getByText('Fração e Divisão')).toBeTruthy();
    expect(getByText('Nível 2: Frações Simples')).toBeTruthy();
    expect(getByText('Pedro pediu uma pizza e a dividiu em 4 fatias. Ele comeu apenas 1 fatia. Que fração da pizza ele comeu?')).toBeTruthy();
  });

  it('Deve selecionar a opção correta e exibir a mensagem de acerto', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT05 />
      </NavigationContainer>
    );

    const opcaoCorreta = getByText('b) 1/4');
    fireEvent.press(opcaoCorreta);

    await waitFor(() => {
      expect(getByText('Parabéns, você acertou!')).toBeTruthy();
      expect(getByText('Próxima')).toBeTruthy();
    });
  });

  it('Deve selecionar a opção incorreta e exibir a mensagem de erro', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT05 />
      </NavigationContainer>
    );

    const opcaoIncorreta = getByText('a) 4/4');
    fireEvent.press(opcaoIncorreta);

    await waitFor(() => {
      expect(getByText('Que pena, não foi dessa vez.')).toBeTruthy();
      expect(getByText('Próxima')).toBeTruthy();
    });
  });

  it('Deve navegar para QuestaoMT06 ao pressionar Próxima', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT05 />
      </NavigationContainer>
    );

    const opcaoCorreta = getByText('b) 1/4');
    fireEvent.press(opcaoCorreta);

    const botaoProxima = await waitFor(() => getByText('Próxima'));
    fireEvent.press(botaoProxima);
  });
});
