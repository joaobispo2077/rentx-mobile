import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};

  position: absolute;

  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: ${RFValue(24)}px;
`;

export const CarImage = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;
