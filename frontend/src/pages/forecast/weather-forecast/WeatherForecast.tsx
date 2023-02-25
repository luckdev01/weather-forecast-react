import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import { IForecastDay } from '../../../models/forecast';
import { useStyles } from './WeatherForecast.styles';
import WeatherDay from '../../../components/weather-day';
import WeatherHour from '../../../components/weather-hour';
import { getToday } from '../../../utils/common';

type Props = {
  data: IForecastDay[];
};

const WeatherForecast: FC<Props> = ({ data }) => {
  const classes = useStyles();
  const [activeDate, setActiveDate] = useState(getToday());
  const activeForecastDay = useMemo(
    () => data.find(forecastDay => forecastDay.date === activeDate),
    [data, activeDate],
  );

  useEffect(() => {
    setActiveDate(getToday());
  }, [data]);

  const handleDateChange = useCallback(
    (newDate: string) => {
      setActiveDate(newDate);
    },
    [setActiveDate],
  );

  return (
    <Box className={classes.container}>
      <Box component="ul" className={classes.hoursBox}>
        {data.map((forecastDay, index) => (
          <li key={index} style={{ listStyleType: 'none' }}>
            <WeatherDay
              forecastDay={forecastDay}
              active={forecastDay.date === activeDate}
              handleDateChange={handleDateChange}
            />
          </li>
        ))}
      </Box>
      <Box component="ul" className={classes.hoursBox}>
        {activeForecastDay?.hour.map((data, index) => (
          <li key={index} style={{ listStyleType: 'none' }}>
            <WeatherHour hour={data} />
          </li>
        ))}
      </Box>
    </Box>
  );
};

export { WeatherForecast };
