import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, StatusBar } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';

import Logo from '../../assets/logo.svg';
import { CarCard } from '../../components/CarCard';
import { LoadingCarAnimation } from '../../components/LoadingCarAnimation';
import { CarDTO } from '../../dtos/CarDTO';
import { StackNavigatorParamList } from '../../routes/stack.routes';
import { api } from '../../services/api';
import {
  CarCardItem,
  CarCardList,
  Container,
  Header,
  HeaderContent,
  MyCarsButton,
  Text,
} from './styles';
type HomeScreenNavigationProps = NativeStackNavigationProp<
  StackNavigatorParamList,
  'Home'
>;

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const buttonVerticalPosition = useSharedValue(0);
  const buttonHorizontalPosition = useSharedValue(0);

  const myCarsButtonAnimationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: buttonVerticalPosition.value,
      },
      {
        translateX: buttonHorizontalPosition.value,
      },
    ],
  }));

  const onMoveMyCarsButton = useAnimatedGestureHandler({
    onStart: (_, context: any) => {
      context.translationY = buttonVerticalPosition.value;
      context.translationX = buttonHorizontalPosition.value;
    },
    onActive: (event, context: any) => {
      buttonVerticalPosition.value = event.translationY + context.translationY;
      buttonHorizontalPosition.value =
        event.translationX + context.translationX;
    },
    onEnd: () => {
      buttonVerticalPosition.value = withSpring(0);
      buttonHorizontalPosition.value = withSpring(0);
    },
  });

  const handleNavigateToCarDetails = (car: CarDTO) => {
    console.log('Navigate to car details');
    navigation.navigate('CarDetails', { car });
  };

  const handleNavigateToMyCars = () => {
    buttonVerticalPosition.value = 0;
    buttonHorizontalPosition.value = 0;

    navigation.navigate('MyCars');
  };

  const fetchCars = async () => {
    try {
      setIsLoading(true);
      const response = await api.get<CarDTO[]>('/cars');

      console.log(response.data);
      const data = response.data;
      setCars(data);
    } catch (error) {
      Alert.alert('Erro ao carregar os carros.');
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    const handleBackButton = () => {
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {!isLoading && <Text>Total de {cars.length} carros</Text>}
        </HeaderContent>
      </Header>

      {isLoading ? (
        <LoadingCarAnimation />
      ) : (
        <CarCardList
          data={cars}
          keyExtractor={(car) => car.id}
          renderItem={({ item }) => (
            <CarCardItem>
              <CarCard
                car={item}
                onPress={() => handleNavigateToCarDetails(item)}
              />
            </CarCardItem>
          )}
        />
      )}

      <PanGestureHandler onGestureEvent={onMoveMyCarsButton}>
        <MyCarsButton
          onPress={handleNavigateToMyCars}
          style={[myCarsButtonAnimationStyle]}
        >
          <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
        </MyCarsButton>
      </PanGestureHandler>
    </Container>
  );
}
