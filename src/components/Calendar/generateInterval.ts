import { eachDayOfInterval, format, addDays } from 'date-fns';

import { CalendarProps, DayProps } from '.';
import theme from '../../styles/theme';
import { getPlatformDate } from '../../utils/getPlatformDate';

export function generateInterval(startDate: DayProps, endDate: DayProps) {
  const intervals = eachDayOfInterval({
    start: new Date(startDate.timestamp),
    end: new Date(endDate.timestamp),
  });
  console.log(intervals);

  const firstDate = intervals[0];
  const hasToAddDays = !format(
    getPlatformDate(firstDate),
    'yyyy-MM-dd',
  ).includes(startDate.dateString);

  const markedDatesInterval: CalendarProps['markedDates'] = intervals.reduce(
    (acc, curr) => {
      const date = hasToAddDays
        ? format(addDays(curr, 1), 'yyyy-MM-dd')
        : format(getPlatformDate(curr), 'yyyy-MM-dd');

      console.log(
        'dates',
        curr,
        date,
        startDate.dateString,
        endDate.dateString,
      );

      const color =
        date.includes(startDate.dateString) || date.includes(endDate.dateString)
          ? theme.colors.main
          : theme.colors.main_light;

      const textColor =
        date.includes(startDate.dateString) || date.includes(endDate.dateString)
          ? theme.colors.main_light
          : theme.colors.main;

      acc[date] = {
        color,
        textColor,
      };

      return acc;
    },
    {},
  );
  console.log(markedDatesInterval);
  return markedDatesInterval;
}
