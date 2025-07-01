import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Parabens } from '../src/screens/Parabens';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

function FakeHomeScreen() {
  return <Text testID="home-screen">Home</Text>;
}

describe('Parabens', () => {
  it('deve renderizar corretamente os elementos principais', () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Parabens" component={Parabens} />
          <Stack.Screen name="Home" component={FakeHomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );

    // Testa se o testID principal aparece
    getByTestId('parabens-screen');

    // Testa se os textos aparecem
    getByText('Parabéns!');
    getByText('Você chegou ao fim da jornada!');
    getByText('Começar de Novo!');
  });

  it('deve navegar para Home ao pressionar Começar de Novo', async () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Parabens" component={Parabens} />
          <Stack.Screen name="Home" component={FakeHomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );

    fireEvent.press(getByText('Começar de Novo!'));

    // Espera renderizar a tela Home
    await getByTestId('home-screen');
  });
});
