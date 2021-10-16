import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background_primary};

  border-radius: 5px;

  height: 109px;
  width: 92px;
`;

export const Title = styled.Text`
  margin-top: ${RFValue(14)}px;

  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
`;
