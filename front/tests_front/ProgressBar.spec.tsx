import React from 'react';
import { render } from '@testing-library/react-native';
import ProgressBar from '../src/components/ProgressBar';

describe('Componente ProgressBar', () => {
  it('Deve renderizar corretamente a barra de progresso', () => {
    const { getByText } = render(<ProgressBar currentQuestion={3} totalQuestions={10} />);

    const texto = getByText('3/10');

    expect(texto).toBeTruthy();
  });

  it('Deve atualizar corretamente o texto de progresso', () => {
    const { getByText, rerender } = render(<ProgressBar currentQuestion={2} totalQuestions={5} />);

    expect(getByText('2/5')).toBeTruthy();

    rerender(<ProgressBar currentQuestion={4} totalQuestions={5} />);
    expect(getByText('4/5')).toBeTruthy();
  });
});
