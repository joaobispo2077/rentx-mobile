import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { CarCard } from '../../components/CarCard';
import { Container, Header, HeaderContent, Text } from './styles';

export function Home() {
  const car = {
    brand: 'audi',
    model: 'RS 5 Coupé',
    period: 'Ao dia',
    price: 120,
    type: 'volt',
    thumbnail:
      'https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png',
  };
  const carTwo = {
    brand: 'chevrolet',
    model: 'Onix',
    period: 'Ao dia',
    price: 120,
    type: 'hatch',
    thumbnail:
      'https://www.webmotors.com.br/imagens/prod/347468/PORSCHE_PANAMERA_2.9_V6_EHYBRID_4_PDK_34746814472691347.png?s=fill&w=130&h=97&q=70&t=true)',
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
      <CarCard car={car} />
      <CarCard car={carTwo} />
    </Container>
  );
}
