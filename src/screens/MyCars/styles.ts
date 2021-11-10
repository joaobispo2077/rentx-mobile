import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

import { ScheduleCarPayload } from '.';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(375)}px;

  padding: ${RFValue(25)}px;
  padding-bottom: ${RFValue(34)}px;
  padding-top: ${getStatusBarHeight() + 30}px;

  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.background_secondary};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.background_secondary};
`;

export const MyCarsTextContainer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px 24px 29px;
`;

export const MyCarsTextTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const MyCarsTextQuantity = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.title};
`;

export const CarCardList = styled(
  FlatList as new () => FlatList<ScheduleCarPayload>,
).attrs({
  contentContainerStyle: {
    padding: RFValue(24),
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const CarCardItem = styled.SafeAreaView`
  margin-bottom: ${RFValue(16)}px;
`;

export const CarFooter = styled.View`
  margin-top: 2px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  padding: 15px 24px;
`;

export const CarRentalPeriodTitle = styled.Text`
  text-transform: uppercase;
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const CarRentalPeriod = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CarRentalPeriodText = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.title};
`;
