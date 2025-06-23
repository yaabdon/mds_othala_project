import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { QuestaoPT01 } from '../src/screens/QuestPort/QuestaoPT01';
import { useNavigation } from '@react-navigation/native';

// Mock da navegação
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe('Tela QuestaoPT01', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigation as jest.Mock).mockReturnValue({ navigate: navigateMock });
  });

  it('Deve renderizar os elementos corretamente', () => {
    const { getByText } = render(<QuestaoPT01 />);

    // Verifica título e perguntas principais
    expect(getByText('Gramática')).toBeTruthy();
    expect(getByText('Nível 2: Predicado')).toBeTruthy();
    expect(getByText('Quem acordou cedo?')).toBeTruthy();

    // Verifica as opções
    expect(getByText('a) Cedo')).toBeTruthy();
    expect(getByText('b) Acordou')).toBeTruthy();
    expect(getByText('c) O menino')).toBeTruthy();
    expect(getByText('d) Foi para a escola')).toBeTruthy();
  });

  it('Deve navegar para QuestaoPT02 ao clicar em "Próxima"', async () => {
    const { getByText } = render(<QuestaoPT01 />);

    // Seleciona uma opção antes
    const opcao = getByText('c) O menino');
    fireEvent.press(opcao);

    // Agora o botão "Próxima" aparece
    const botaoProxima = await waitFor(() => getByText('Próxima'));
    fireEvent.press(botaoProxima);

    expect(navigateMock).toHaveBeenCalledWith('QuestaoPT02');
  });
});
