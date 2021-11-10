/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import { BackButton } from '../../components/BackButton';
import { CarCard } from '../../components/CarCard';
import { Loading } from '../../components/Loading';
import { CarDTO } from '../../dtos/CarDTO';
import { StackNavigatorParamList } from '../../routes/stack.routes';
import { api } from '../../services/api';
import {
  Container,
  Header,
  Title,
  SubTitle,
  MyCarsTextContainer,
  MyCarsTextTitle,
  MyCarsTextQuantity,
  CarCardList,
  CarCardItem,
  CarFooter,
  CarRentalPeriodTitle,
  CarRentalPeriod,
  CarRentalPeriodText,
} from './styles';

type MyCarsScreenNavigationProps = NativeStackNavigationProp<
  StackNavigatorParamList,
  'MyCars'
>;

type SchedulesByUserResponse = {
  car: CarDTO;
  user_id: string;
  id: number;
};

export function MyCars() {
  const theme = useTheme();
  const navigation = useNavigation<MyCarsScreenNavigationProps>();

  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigateGoBack = () => {
    navigation.goBack();
  };

  const fetchUserCars = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get<SchedulesByUserResponse[]>(
        '/schedules_byuser?user_id=10',
      );

      setCars(data.map((item) => item.car));
      console.log(data);
    } catch (error: any) {
      Alert.alert('Erro', 'Erro ao carregar os carros');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserCars();
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleNavigateGoBack} color={theme.colors.shape} />

        <Title>Seus agendamentos,{'\n'} estão aqui.</Title>
        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>
      <MyCarsTextContainer>
        <MyCarsTextTitle>Agendamentos feitos</MyCarsTextTitle>
        <MyCarsTextQuantity>{cars.length}</MyCarsTextQuantity>
      </MyCarsTextContainer>

      {isLoading ? (
        <Loading />
      ) : (
        <CarCardList
          data={cars}
          keyExtractor={(car) => car.id}
          renderItem={({ item }) => (
            <CarCardItem>
              <CarCard car={item} />
              <CarFooter>
                <CarRentalPeriodTitle>período</CarRentalPeriodTitle>
                <CarRentalPeriod>
                  <CarRentalPeriodText>18/06/2021</CarRentalPeriodText>
                  <AntDesign
                    name="arrowright"
                    size={24}
                    color={theme.colors.title}
                    style={{ marginHorizontal: 10 }}
                  />
                  <CarRentalPeriodText>20/06/2021</CarRentalPeriodText>
                </CarRentalPeriod>
              </CarFooter>
            </CarCardItem>
          )}
        />
      )}
    </Container>
  );
}
