import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { getIconByIconType } from '../../utils/getIconByIconType';
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
  name: string;
  rent: {
    price: number;
    period: string;
  };
  fuel_type: string;
  thumbnail: string;
};

type CarCardProps = {
  car: Car;
} & RectButtonProps;

export function CarCard({ car, ...rest }: CarCardProps) {
  const formatCurrency = (value: number) => {
    //  new Intl.NumberFormat('pt-BR', {
    //   style: 'currency',
    //   currency: 'BRL',
    // }).format(value);

    return `R$ ${value}`;
  };

  const CarTypeIcon = getIconByIconType(car.fuel_type);

  return (
    <Container {...rest}>
      <CarDetails>
        <Brand>{car.brand}</Brand>
        <Model>{car.name}</Model>

        <RentInfo>
          <Pricing>
            <Period>{car.rent.period}</Period>
            <Price>{formatCurrency(car.rent.price)}</Price>
          </Pricing>
          <Type>
            <CarTypeIcon />
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
