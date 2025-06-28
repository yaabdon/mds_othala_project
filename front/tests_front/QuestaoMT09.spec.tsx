import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QuestaoMT09 } from '../src/screens/QuestMat/QuestaoMT09';

describe('Tela QuestaoMT09', () => {
  it('Deve renderizar corretamente a tela da questão', () => {
    const { getByTestId, getByText } = render(
      <NavigationContainer>
        <QuestaoMT09 />
      </NavigationContainer>
    );

    expect(getByTestId('questao-mt09-screen')).toBeTruthy();
    expect(getByText('Eduardo juntou 4 figurinhas e depois ganhou o dobro de 6 de um amigo. Quantas figurinhas ele tem agora?')).toBeTruthy();
  });

  it('Deve selecionar a resposta correta e ir para a próxima', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT09 />
      </NavigationContainer>
    );

    const opcaoCorreta = getByText('b) 16');
    fireEvent.press(opcaoCorreta);

    await waitFor(() => {
      expect(getByText('Parabéns, você acertou!')).toBeTruthy();
    });

    const botaoProxima = getByText('Próxima');
    fireEvent.press(botaoProxima);
  });

  it('Deve selecionar uma resposta incorreta e exibir feedback', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <QuestaoMT09 />
      </NavigationContainer>
    );

    const opcaoErrada = getByText('a) 20');
    fireEvent.press(opcaoErrada);

    await waitFor(() => {
      expect(getByText('Que pena, não foi dessa vez.')).toBeTruthy();
    });
  });
});
