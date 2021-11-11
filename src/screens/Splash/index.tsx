import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import { Button } from '../../components/Button';
import { Container } from './styles';

export function Splash() {
  const progress = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(progress.value, {
          duration: 500,
          easing: Easing.bezier(1, 0.05, 0.05, 0.99),
        }),
      },
    ],
  }));

  const handleAnimationProgress = (value: number) => {
    progress.value -= value;
  };

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      <Animated.View style={[styles.box, animatedStyles]} />

      <Button title="Animando" onPress={() => handleAnimationProgress(40)} />
    </Container>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginBottom: 20,
  },
});
