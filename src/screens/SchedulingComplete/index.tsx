import React from 'react';

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
  return (
    <Container>
      <LogoSvg />
      <DoneSvg />
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
