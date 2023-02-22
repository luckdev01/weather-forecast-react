import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { WiSunrise, WiSunset } from 'react-icons/wi';
import { IForecastDay } from '../../models/forecast';
import { getWeekday } from '../../utils/common';
import { useStyles } from './WeatherDay.styles';

interface Props {
  forecastDay: IForecastDay;
  selected?: boolean;
}

const WeatherDay = ({ forecastDay, selected }: Props) => {
  const classes = useStyles();

  return (
    <Box className={`${classes.container} ${selected ? 'active' : ''}`}>
      <Typography fontWeight="bold">{getWeekday(forecastDay.date)}</Typography>
      <Box>
        <img
          alt="condition-icon"
          src={forecastDay.day.condition.icon}
          className={classes.weatherIcon}
        />
      </Box>
      <Box display="flex" justifyContent="space-around">
        <Typography>
          {forecastDay.day.mintemp_c}
          <sup style={{ fontSize: 8 }}>o</sup>
        </Typography>
        <Typography>
          {forecastDay.day.maxtemp_c}
          <sup style={{ fontSize: 8 }}>o</sup>
        </Typography>
      </Box>
      <Box className={classes.sunriseBox}>
        <WiSunrise size={24} />
        <Typography>{forecastDay.astro.sunrise}</Typography>
      </Box>
      <Box className={classes.sunriseBox}>
        <WiSunset size={24} />
        <Typography>{forecastDay.astro.sunset}</Typography>
      </Box>
    </Box>
  );
};

export { WeatherDay };
