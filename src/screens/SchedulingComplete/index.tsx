import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import DoneSvg from '../../assets/done.svg';
import LogoSvg from '../../assets/logo_background_gray.svg';
import { StackNavigatorParamList } from '../../routes/stack.routes';
import {
  Container,
  SuccessTitle,
  SuccessDescription,
  ButtonConfirmation,
  ButtonConfirmationText,
} from './styles';

type SchedulingCompleteScreenNavigationProps = NativeStackNavigationProp<
  StackNavigatorParamList,
  'Scheduling'
>;

export function SchedulingComplete() {
  const navigation = useNavigation<SchedulingCompleteScreenNavigationProps>();
  const { width } = useWindowDimensions();

  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />
      <DoneSvg width={80} height={80} />
      <SuccessTitle>Carro alugado!</SuccessTitle>
      <SuccessDescription>
        Agora você só precisa ir {'\n'} até a concessionária da RENTX {'\n'}{' '}
        pegar o seu automóvel.
      </SuccessDescription>
      <ButtonConfirmation onPress={handleNavigateToHome}>
        <ButtonConfirmationText>Ok</ButtonConfirmationText>
      </ButtonConfirmation>
    </Container>
  );
}
