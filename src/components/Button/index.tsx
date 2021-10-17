import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

type ButtonProps = {
  title: string;
  color?: string;
} & RectButtonProps;

export const Button: React.FC<ButtonProps> = ({ title, color, ...rest }) => {
  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
};
