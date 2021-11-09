import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

import { CarDTO } from '../../dtos/CarDTO';

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

export const CarCardList = styled(FlatList as new () => FlatList<CarDTO>).attrs(
  {
    contentContainerStyle: {
      padding: RFValue(24),
    },
    showsVerticalScrollIndicator: false,
  },
)`
  flex: 1;
`;

export const CarCardItem = styled.SafeAreaView`
  margin-bottom: ${RFValue(16)}px;
`;

export const MyCarsButton = styled(RectButton)`
  position: absolute;
  right: ${RFValue(22)}px;
  bottom: ${RFValue(13)}px;

  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;

  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 30px;

  align-items: center;
  justify-content: center;
`;
