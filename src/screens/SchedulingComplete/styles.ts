import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: #1b1b1f;
`;

export const SuccessTitle = styled.Text`
  margin-top: ${RFValue(46)}px;

  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;

  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;
export const SuccessDescription = styled.Text`
  margin-top: ${RFValue(16)}px;

  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(15)}px;

  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;
`;
export const ButtonConfirmation = styled(RectButton)`
  margin-top: ${RFValue(80)}px;

  width: ${RFValue(80)}px;
  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.shape_dark};
  justify-content: center;
  align-items: center;
`;

export const ButtonConfirmationText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;

  font-family: ${({ theme }) => theme.fonts.primary_500};
  text-align: center;
`;
