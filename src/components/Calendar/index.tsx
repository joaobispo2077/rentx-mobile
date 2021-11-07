/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  Calendar as CustomCalendar,
  CalendarProps as CustomCalendarProps,
  LocaleConfig,
} from 'react-native-calendars';
import { RFValue } from 'react-native-responsive-fontsize';

import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { ptBR } from './localConfig';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

type DayProps = {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
};

type CalendarProps = {
  onDayPress: (date: DayProps) => void;
  markedDates: CustomCalendarProps['markedDates'];
};

function Calendar({ onDayPress, markedDates }: CalendarProps) {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
          size={24}
          color={theme.colors.shape}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: RFValue(10),
        textMonthFontSize: RFValue(20),
        textMonthFontFamily: theme.fonts.secondary_600,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: RFValue(-15),
        },
      }}
      firstDay={1}
      minDate={new Date()}
      markingType="period"
      onDayPress={onDayPress}
      markedDates={markedDates}
    />
  );
}

export { Calendar, CalendarProps, DayProps };
