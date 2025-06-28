import React from 'react';
import { render } from '@testing-library/react-native';
import { Loading } from '../src/components/Loading';

describe('Componente Loading', () => {
  it('Deve renderizar corretamente o ActivityIndicator', () => {
    const { getByTestId } = render(<Loading />);
    const activityIndicator = getByTestId('loading-indicator');
    expect(activityIndicator).toBeTruthy();
  });
});
