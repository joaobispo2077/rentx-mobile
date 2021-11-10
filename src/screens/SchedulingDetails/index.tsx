import React from 'react';
import { Alert } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { CarStat } from '../../components/CarStat';
import { ImageSlider } from '../../components/ImageSlider';
import { StackNavigatorParamList } from '../../routes/stack.routes';
import { api } from '../../services/api';
import { formatDate } from '../../utils/formatDate';
import { getIconByIconType } from '../../utils/getIconByIconType';
import {
  CarImage,
  Container,
  Header,
  Content,
  Details,
  Identity,
  Brand,
  Model,
  Pricing,
  Period,
  Price,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceTitle,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
  CarStatList,
  CarStatItem,
  Footer,
} from './styles';

type SchedulingDetailsScreenNavigationProps = NativeStackNavigationProp<
  StackNavigatorParamList,
  'SchedulingDetails'
>;

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation<SchedulingDetailsScreenNavigationProps>();
  const route =
    useRoute<RouteProp<StackNavigatorParamList, 'SchedulingDetails'>>();
  const { car, dates } = route.params;

  const startDate = formatDate(dates[0]);
  const endDate = formatDate(dates[dates.length - 1]);

  const diary = dates.length;
  const total = car.rent.price * diary;

  const handleNavigateGoBack = () => {
    navigation.goBack();
  };

  const handleNavigateToSchedulingComplete = () => {
    navigation.navigate('SchedulingComplete');
  };

  const handleConfirmRental = async () => {
    try {
      type ResponseSchedulesByCars = {
        id: string;
        unavailable_dates: string[];
      };
      const responseSchedules = await api.get<ResponseSchedulesByCars>(
        `/schedules_bycars/${car.id}`,
      );
      const schedulesByCar = responseSchedules.data;

      const unavailable_dates = schedulesByCar.unavailable_dates.concat(dates);

      await api.post('/schedules_byuser', {
        user_id: 10,
        car,
      });

      await api.put(`/schedules_bycars/${schedulesByCar.id}`, {
        unavailable_dates,
      });

      handleNavigateToSchedulingComplete();
    } catch (error: any) {
      Alert.alert('Erro ao reservar o carro');
      console.log('error', error);
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleNavigateGoBack} />
      </Header>
      <CarImage>
        <ImageSlider imagesURL={car.photos} />
      </CarImage>

      <Content>
        <Details>
          <Identity>
            <Brand>{car.brand}</Brand>
            <Model>{car.name}</Model>
          </Identity>
          <Pricing>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Pricing>
        </Details>
        <CarStatList>
          {car.accessories.map((accessory) => (
            <CarStatItem key={accessory.type}>
              <CarStat
                title={accessory.name}
                icon={getIconByIconType(accessory.type)}
              />
            </CarStatItem>
          ))}
        </CarStatList>
        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={24} color={theme.colors.shape} />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{startDate}</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={10}
            color={theme.colors.text_detail}
          />
          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>{endDate}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceTitle>Total</RentalPriceTitle>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.rent.price} x{diary} diárias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {total}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
