import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { Button } from '../../components/Button';
import { Container } from './styles';

export function Splash() {
  const progress = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: progress.value,
      },
    ],
  }));

  const handleAnimationProgress = (value: number) => {
    progress.value += value;
  };

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      <Animated.View style={[styles.box, animatedStyles]} />

      <Button title="Animando" onPress={() => handleAnimationProgress(5)} />
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
