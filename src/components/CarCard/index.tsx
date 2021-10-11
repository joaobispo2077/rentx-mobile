import React from 'react';

import GasolineSvg from '../../assets/gasoline.svg';
import {
  Container,
  CarDetails,
  Brand,
  Model,
  RentInfo,
  Pricing,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

type Car = {
  brand: string;
  model: string;
  price: number;
  type: string;
  period: string;
  thumbnail: string;
};

type CarCardProps = {
  car: Car;
};

export function CarCard({ car }: CarCardProps) {
  const formatCurrency = (value: number) => {
    //  new Intl.NumberFormat('pt-BR', {
    //   style: 'currency',
    //   currency: 'BRL',
    // }).format(value);

    return `R$ ${value}`;
  };

  return (
    <Container>
      <CarDetails>
        <Brand>{car.brand}</Brand>
        <Model>{car.model}</Model>

        <RentInfo>
          <Pricing>
            <Period>{car.period}</Period>
            <Price>{formatCurrency(car.price)}</Price>
          </Pricing>
          <Type>
            <GasolineSvg />
          </Type>
        </RentInfo>
      </CarDetails>
      <CarImage
        source={{
          uri: car.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
