import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Logo from '../../assets/logo.svg';
import { CarCard } from '../../components/CarCard';
import { StackNavigatorParamList } from '../../routes/stack.routes';
import {
  CarCardItem,
  CarCardList,
  Container,
  Header,
  HeaderContent,
  Text,
} from './styles';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackNavigatorParamList,
  'Home'
>;

export function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const car = {
    id: '1',
    brand: 'audi',
    model: 'RS 5 Coupé',
    period: 'Ao dia',
    price: 120,
    type: 'volt',
    thumbnail:
      'https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png',
  };
  // const carTwo = {
  //   id: '2',
  //   brand: 'chevrolet',
  //   model: 'Onix',
  //   period: 'Ao dia',
  //   price: 120,
  //   type: 'hatch',
  //   thumbnail:
  //     'https://www.webmotors.com.br/imagens/prod/347468/PORSCHE_PANAMERA_2.9_V6_EHYBRID_4_PDK_34746814472691347.png?s=fill&w=130&h=97&q=70&t=true)',
  // };

  const handleNavigateToCarDetails = () => {
    console.log('Navigate to car details');
    navigation.navigate('CarDetails');
  };

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
          <Text>Total de 12 carros</Text>
        </HeaderContent>
      </Header>
      <CarCardList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        keyExtractor={(car) => String(car)}
        renderItem={() => (
          <CarCardItem>
            <CarCard car={car} onPress={handleNavigateToCarDetails} />
          </CarCardItem>
        )}
      />
    </Container>
  );
}
