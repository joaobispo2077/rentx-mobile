/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import { BackButton } from '../../components/BackButton';
import { CarCard } from '../../components/CarCard';
import { LoadingCarAnimation } from '../../components/LoadingCarAnimation';
import { CarDTO } from '../../dtos/CarDTO';
import { StackNavigatorParamList } from '../../routes/stack.routes';
import { api } from '../../services/api';
import { formatDate } from '../../utils/formatDate';
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

export type ScheduleCarPayload = {
  car: CarDTO;
  user_id: string;
  id: number;
  startDate: string;
  endDate: string;
};

export function MyCars() {
  const theme = useTheme();
  const navigation = useNavigation<MyCarsScreenNavigationProps>();

  const [cars, setCars] = useState<ScheduleCarPayload[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigateGoBack = () => {
    navigation.goBack();
  };

  const fetchUserCars = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get<ScheduleCarPayload[]>(
        '/schedules_byuser?user_id=100',
      );

      setCars(data);
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
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
        />
        <BackButton onPress={handleNavigateGoBack} color={theme.colors.shape} />

        <Title>Seus agendamentos,{'\n'} estão aqui.</Title>
        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>
      <MyCarsTextContainer>
        <MyCarsTextTitle>Agendamentos feitos</MyCarsTextTitle>
        <MyCarsTextQuantity>{cars.length}</MyCarsTextQuantity>
      </MyCarsTextContainer>

      {isLoading ? (
        <LoadingCarAnimation />
      ) : (
        <CarCardList
          data={cars}
          keyExtractor={(car) => String(car.id)}
          renderItem={({ item }) => (
            <CarCardItem>
              <CarCard car={item.car} />
              <CarFooter>
                <CarRentalPeriodTitle>período</CarRentalPeriodTitle>
                <CarRentalPeriod>
                  <CarRentalPeriodText>
                    {formatDate(item.startDate)}
                  </CarRentalPeriodText>
                  <AntDesign
                    name="arrowright"
                    size={24}
                    color={theme.colors.title}
                    style={{ marginHorizontal: 10 }}
                  />
                  <CarRentalPeriodText>
                    {formatDate(item.endDate)}
                  </CarRentalPeriodText>
                </CarRentalPeriod>
              </CarFooter>
            </CarCardItem>
          )}
        />
      )}
    </Container>
  );
}
