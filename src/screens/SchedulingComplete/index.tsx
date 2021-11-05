import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';

import DoneSvg from '../../assets/done.svg';
import LogoSvg from '../../assets/logo_background_gray.svg';
import {
  Container,
  SuccessTitle,
  SuccessDescription,
  ButtonConfirmation,
  ButtonConfirmationText,
} from './styles';

export function SchedulingComplete() {
  const { width } = useWindowDimensions();

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
      <ButtonConfirmation onPress={() => console.log('OK is pressed')}>
        <ButtonConfirmationText>Ok</ButtonConfirmationText>
      </ButtonConfirmation>
    </Container>
  );
}
