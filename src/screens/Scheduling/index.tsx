import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import ArrowIcon from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { StackNavigatorParamList } from '../../routes/stack.routes';
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';

type SchedulingScreenNavigationProps = NativeStackNavigationProp<
  StackNavigatorParamList,
  'Scheduling'
>;
export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation<SchedulingScreenNavigationProps>();

  const handleNavigateGoBack = () => {
    navigation.goBack();
  };

  const handleNavigateToSchedulingDetails = () => {
    navigation.navigate('SchedulingDetails');
  };

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        <BackButton onPress={handleNavigateGoBack} color={theme.colors.shape} />

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
      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleNavigateToSchedulingDetails} />
      </Footer>
    </Container>
  );
}
