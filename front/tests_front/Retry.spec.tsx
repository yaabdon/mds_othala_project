import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Retry } from '../src/components/Retry-mat';

describe('Componente Retry', () => {
  const onRetryMock = jest.fn();
  const onCloseMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Deve renderizar corretamente quando estiver visível', () => {
    const { getByText } = render(
      <Retry visible={true} onRetry={onRetryMock} onClose={onCloseMock} />
    );

    expect(getByText('Você errou mais de duas questões desse módulo! Gostaria de tentar novamente?')).toBeTruthy();
    expect(getByText('Tentar novamente')).toBeTruthy();
    expect(getByText('Fechar')).toBeTruthy();
  });

  it('Deve chamar onRetry quando o botão "Tentar novamente" for pressionado', () => {
    const { getByText } = render(
      <Retry visible={true} onRetry={onRetryMock} onClose={onCloseMock} />
    );

    const botaoRetry = getByText('Tentar novamente');
    fireEvent.press(botaoRetry);

    expect(onRetryMock).toHaveBeenCalled();
  });

  it('Deve chamar onClose quando o botão "Fechar" for pressionado', () => {
    const { getByText } = render(
      <Retry visible={true} onRetry={onRetryMock} onClose={onCloseMock} />
    );

    const botaoClose = getByText('Fechar');
    fireEvent.press(botaoClose);

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('Não deve renderizar nada quando não estiver visível', () => {
    const { queryByText } = render(
      <Retry visible={false} onRetry={onRetryMock} onClose={onCloseMock} />
    );

    expect(queryByText('Você errou mais de duas questões desse módulo! Gostaria de tentar novamente?')).toBeNull();
  });
});
