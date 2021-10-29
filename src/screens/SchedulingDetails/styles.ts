import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
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

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: RFValue(24),
    alignItems: 'center',
  },
})`
  width: 100%;
`;

export const Details = styled.View`
  margin-top: ${RFValue(24)}px;

  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Identity = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Model = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(25)}px;
`;

export const Pricing = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(25)}px;
`;

export const CarStatList = styled.View`
  margin-top: ${RFValue(16)}px;

  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;
`;

export const CarStatItem = styled.View`
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  margin-top: ${RFValue(24)}px;

  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;

  text-align: justify;
`;

export const Footer = styled.View`
  width: 100%;
  padding: ${RFValue(24)}px ${RFValue(24)}px ${getBottomSpace() + RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const RentalPeriod = styled.View`
  margin-top: ${RFValue(16)}px;

  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  align-items: center;

  padding-bottom: ${RFValue(16)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const CalendarIcon = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.colors.main};
  justify-content: center;
  align-items: center;
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const DateValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const RentalPrice = styled.View`
  margin-top: ${RFValue(16)}px;
  width: 100%;
`;

export const RentalPriceTitle = styled.Text`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RentalPriceQuota = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const RentalPriceTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.success};
`;
