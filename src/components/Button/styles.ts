import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

type ContainerProps = {
  color?: string;
};

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;

  padding: ${RFValue(19)}px;

  align-items: center;
  justify-content: center;

  opacity: ${({ enabled }) => (enabled ? 1 : 0.5)};

  background-color: ${({ color, theme }) => color || theme.colors.main};
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.background_secondary};
`;
