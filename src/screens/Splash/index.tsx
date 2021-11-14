import React, { useEffect, useCallback } from 'react';
import { StatusBar } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';
import { StackNavigatorParamList } from '../../routes/stack.routes';
import { Container } from './styles';

type SplashScreenNavigationProps = NativeStackNavigationProp<
  StackNavigatorParamList,
  'Splash'
>;

export function Splash() {
  const navigation = useNavigation<SplashScreenNavigationProps>();

  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 25, 50], [1, 0.3, 0]),
    transform: [
      {
        translateX: interpolate(
          splashAnimation.value,
          [0, 50],
          [0, 50],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  const logoStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
    transform: [
      {
        translateX: interpolate(
          splashAnimation.value,
          [0, 50],
          [50, 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  const navigateToHomeScreen = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const startSplashScreenAnimation = useCallback(() => {
    splashAnimation.value = withTiming(50, { duration: 1000 }, () => {
      'worklet';
      runOnJS(navigateToHomeScreen)();
    });
  }, [navigateToHomeScreen, splashAnimation]);

  useEffect(() => {
    startSplashScreenAnimation();
  }, [startSplashScreenAnimation]);

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>
      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
}
