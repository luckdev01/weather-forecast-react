import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { WeatherUnitContext } from '../../contexts/weather-unit.context';
import { IHour } from '../../models/forecast';
import { useStyles } from './WeatherHour.styles';

interface Props {
  hour: IHour;
}

const WeatherHour = ({ hour }: Props) => {
  const { weatherUnit } = useContext(WeatherUnitContext);
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography fontWeight="bold">{hour.time.split(' ')[1]}</Typography>
      <Box>
        <img
          alt="condition-icon"
          src={hour.condition.icon}
          className={classes.weatherIcon}
        />
      </Box>
      <Typography>
        {weatherUnit === 'C' ? hour.temp_c : hour.temp_f}
        <sup style={{ fontSize: 8 }}>o</sup>
      </Typography>
      <Typography fontSize={12}>
        Feels like: {weatherUnit === 'C' ? hour.feelslike_c : hour.feelslike_f}
        <sup style={{ fontSize: 6 }}>o</sup>
      </Typography>
      <Typography>{hour.humidity}%</Typography>
      <Typography fontSize={12}>
        {hour.wind_mph} mph ({hour.wind_dir})
      </Typography>
    </Box>
  );
};

export { WeatherHour };
