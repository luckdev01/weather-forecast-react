import React, { FC, useCallback, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { WeatherUnitContext } from '../../../contexts/weather-unit.context';
import { ICurrentWeather } from '../../../models/forecast';
import { useStyles } from './CurrentWeather.styles';

type Props = {
  data: ICurrentWeather;
};

const CurrentWeather: FC<Props> = ({ data }) => {
  const { weatherUnit, setWeatherUnit } = useContext(WeatherUnitContext);
  const classes = useStyles();

  const changeWeatherUnit = useCallback(
    (unit: string) => {
      setWeatherUnit(unit);
    },
    [setWeatherUnit],
  );

  const renderUnit = () => (
    <Box display="flex">
      <Typography fontSize={48}>
        {weatherUnit === 'C' ? data.temp_c : data.temp_f}
      </Typography>
      <Box component="sup">o</Box>
      <Box
        component="span"
        className={`${classes.weatherUnit} ${
          weatherUnit === 'C' ? 'active' : ''
        }`}
        onClick={() => changeWeatherUnit('C')}
      >
        C
      </Box>
      <Box component="span" pl={1}>
        |
      </Box>
      <Box
        component="span"
        className={`${classes.weatherUnit} ${
          weatherUnit === 'F' ? 'active' : ''
        }`}
        onClick={() => changeWeatherUnit('F')}
      >
        F
      </Box>
    </Box>
  );

  return (
    <Box className={classes.container}>
      <Box display="flex" flex={0.5}>
        <Box>
          <img alt="condition-icon" src={data.condition.icon} />
          <Typography>{data.condition.text}</Typography>
        </Box>
        {renderUnit()}
      </Box>
      <Box
        flex={0.5}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Typography>
          Humidity: <b>{data.humidity}</b>%
        </Typography>
        <Typography>
          Wind: <b>{data.wind_mph}</b> mph ({data.wind_dir})
        </Typography>
        <Typography>
          Feels like:{' '}
          <b>{weatherUnit === 'C' ? data.feelslike_c : data.feelslike_f}</b>
          <Box component="sup">o</Box>
        </Typography>
      </Box>
    </Box>
  );
};

export { CurrentWeather };
