import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

type DateValueProps = {
  isSelected: boolean;
};

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(375)}px;

  padding: ${RFValue(25)}px;
  padding-top: ${getStatusBarHeight() + 30}px;

  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const Title = styled.Text`
  font-size: ${RFValue(34)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Schedule = styled.View`
  flex: 1;
`;

export const RentalPeriod = styled.View`
  margin: ${RFValue(32)}px 0;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.text};

  text-transform: uppercase;
`;

export const DateValue = styled.Text<DateValueProps>`
  font-size: ${RFValue(11)}px;

  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.shape};

  text-transform: uppercase;

  ${({ isSelected, theme }) =>
    !isSelected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
    `}
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: RFValue(24),
  },
})``;

export const Footer = styled.View`
  padding: ${RFValue(24)}px;
`;
