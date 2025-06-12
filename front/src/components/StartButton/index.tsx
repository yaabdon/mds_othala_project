import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

type Props = {
      onPress: (event: GestureResponderEvent) => void;
      label?: string;
      color?: string;
      style?: StyleProp<ViewStyle>;
};

export function StartButton({
  onPress,
  label = 'Iniciar',
  color = '#4CAF50',
  style, 
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]} // APLICA AQUI
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}
