import React from 'react';
import { SvgProps } from 'react-native-svg';

import { Container, Title } from './styles';

type CarStatProps = {
  title: string;
  icon: React.FC<SvgProps>;
};

export const CarStat: React.FC<CarStatProps> = ({ title, icon: Icon }) => {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Title>{title}</Title>
    </Container>
  );
};
