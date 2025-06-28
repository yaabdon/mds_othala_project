import React, { useRef, useEffect } from 'react';
import { styles } from './styles';
import { View, Animated, Text } from 'react-native';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentQuestion, totalQuestions }) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const percentage = currentQuestion / totalQuestions;

    Animated.timing(progress, {
      toValue: percentage,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [currentQuestion]);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, { width: widthInterpolated }]} />
      <Text style={styles.text}>
        {currentQuestion}/{totalQuestions}
      </Text>
    </View>
  );
};

export default ProgressBar;


