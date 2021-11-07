import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import ArrowIcon from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, DayProps, CalendarProps } from '../../components/Calendar';
import { generateInterval } from '../../components/Calendar/generateInterval';
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

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>();
  const [markedDates, setMarkedDates] =
    useState<CalendarProps['markedDates']>();

  const handleNavigateGoBack = () => {
    navigation.goBack();
  };

  const handleNavigateToSchedulingDetails = () => {
    navigation.navigate('SchedulingDetails');
  };

  const getStartDate = (endDate: DayProps) => {
    const startDate = lastSelectedDate?.timestamp ? lastSelectedDate : endDate;

    if (startDate.timestamp > endDate.timestamp) {
      return endDate;
    }

    return startDate;
  };

  const getEndDate = (date: DayProps, startDate: DayProps) => {
    const endDate = date;

    if (startDate?.timestamp > endDate?.timestamp) {
      return startDate;
    }

    return endDate;
  };

  const handleChangeDate = (date: DayProps) => {
    const startDate = getStartDate(date);
    const endDate = getEndDate(date, startDate);

    console.log('handleChangeDate');
    setLastSelectedDate(endDate);
    const markedDatesInterval = generateInterval(startDate, endDate);
    setMarkedDates(markedDatesInterval);
    return;
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
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleNavigateToSchedulingDetails} />
      </Footer>
    </Container>
  );
}
