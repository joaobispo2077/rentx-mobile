import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  padding: ${RFValue(32)}px ${RFValue(24)}px;

  justify-content: flex-end;

  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};

  font-size: ${RFValue(15)}px;
`;
