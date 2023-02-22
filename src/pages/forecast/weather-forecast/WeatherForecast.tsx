import React, { FC, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import { IForecastDay } from '../../../models/forecast';
import { useStyles } from './WeatherForecast.styles';
import WeatherDay from '../../../components/weather-day';
import WeatherHour from '../../../components/weather-hour';
import { getYesterday } from '../../../utils/common';

type Props = {
  data: IForecastDay[];
};

const WeatherForecast: FC<Props> = ({ data }) => {
  const classes = useStyles();
  const [date, setDate] = useState(getYesterday());
  const foreCastDay = useMemo(
    () => data.find(item => item.date === date),
    [data, date],
  );

  return (
    <Box className={classes.container}>
      {foreCastDay && <WeatherDay forecastDay={foreCastDay} />}
      <WeatherHour />
    </Box>
  );
};

export { WeatherForecast };
