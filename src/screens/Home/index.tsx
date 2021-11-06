import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Logo from '../../assets/logo.svg';
import { CarCard } from '../../components/CarCard';
import { Loading } from '../../components/Loading';
import { CarDTO } from '../../dtos/CarDTO';
import { StackNavigatorParamList } from '../../routes/stack.routes';
import { api } from '../../services/api';
import {
  CarCardItem,
  CarCardList,
  Container,
  Header,
  HeaderContent,
  Text,
} from './styles';

type HomeScreenNavigationProps = NativeStackNavigationProp<
  StackNavigatorParamList,
  'Home'
>;

export function Home() {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigateToCarDetails = () => {
    console.log('Navigate to car details');
    navigation.navigate('CarDetails');
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
          <Text>Total de {cars.length} carros</Text>
        </HeaderContent>
      </Header>

      {isLoading ? (
        <Loading />
      ) : (
        <CarCardList
          data={cars}
          keyExtractor={(car) => car.id}
          renderItem={({ item }) => (
            <CarCardItem>
              <CarCard car={item} onPress={handleNavigateToCarDetails} />
            </CarCardItem>
          )}
        />
      )}
    </Container>
  );
}
