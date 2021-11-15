import React from 'react';

import loadingCarAnimationJson from '../../assets/lottie_load_car_animated.json';
import { AnimatedLottieView, Container } from './styles';

export function LoadingCarAnimation() {
  return (
    <Container>
      <AnimatedLottieView
        source={loadingCarAnimationJson}
        autoPlay
        loop
        resizeMode="contain"
      />
    </Container>
  );
}
