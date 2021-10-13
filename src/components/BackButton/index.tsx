import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Container } from './styles';

type BackButtonProps = {
  color?: string;
} & BorderlessButtonProps;

export function BackButton({ color, ...rest }: BackButtonProps) {
  const theme = useTheme();

  const iconColor = color || theme.colors.text;

  return (
    <Container {...rest}>
      <MaterialIcons name="arrow-back" size={24} color={iconColor} />
    </Container>
  );
}
