import { Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

type ImageSelectorProps = {
  isActive: boolean;
};

export const Container = styled.View`
  width: ${Dimensions.get('window').width}px;
`;

export const ImageSelectorList = styled.View`
  flex-direction: row;
  align-self: flex-end;

  padding-right: ${RFValue(24)}px;
`;

export const ImageSelectorItem = styled(BorderlessButton)`
  margin-left: ${RFValue(8)}px;
`;

export const ImageSelector = styled.View<ImageSelectorProps>`
  width: ${RFValue(6)}px;
  height: ${RFValue(6)}px;

  border-radius: ${RFValue(3)}px;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.title : theme.colors.shape};
`;

export const ImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${RFValue(132)}px;

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${RFValue(280)}px;
  height: 100%;
`;
