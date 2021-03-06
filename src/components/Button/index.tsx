import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

type ButtonProps = {
  title: string;
  color?: string;
  isLoading?: boolean;
} & RectButtonProps;

export const Button: React.FC<ButtonProps> = ({
  title,
  color,
  isLoading = false,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Container {...rest} color={color} isLoading>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
};
