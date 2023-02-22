import React, { FC, useMemo, useState } from 'react';
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
  const [date, setDate] = useState(getToday());
  const foreCastDay = useMemo(
    () => data.find(item => item.date === date),
    [data, date],
  );

  console.log({ data, date, foreCastDay });

  return (
    <Box className={classes.container}>
      {foreCastDay && <WeatherDay forecastDay={foreCastDay} />}
      <Box className={classes.hoursBox}>
        {foreCastDay?.hour.map(data => (
          <WeatherHour hour={data} />
        ))}
      </Box>
    </Box>
  );
};

export { WeatherForecast };
