import React from 'react';
import { StatusBar } from 'react-native';

import { useTheme } from 'styled-components/native';

import ArrowIcon from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import {
  Container,
  Header,
  Schedule,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
} from './styles';

export function Scheduling() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        <BackButton
          onPress={() => console.log('irra')}
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue isSelected={false} />
          </DateInfo>

          <ArrowIcon />
          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue isSelected={false} />
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Schedule />
    </Container>
  );
}