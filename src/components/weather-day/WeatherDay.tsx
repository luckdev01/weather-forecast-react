import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { WiSunrise, WiSunset } from 'react-icons/wi';
import { WeatherUnitContext } from '../../contexts/weather-unit.context';
import { IForecastDay } from '../../models/forecast';
import { getWeekday } from '../../utils/common';
import { useStyles } from './WeatherDay.styles';

interface Props {
  forecastDay: IForecastDay;
  active: boolean;
  handleDateChange: (day: string) => void;
}

const WeatherDay = ({ forecastDay, active, handleDateChange }: Props) => {
  const { weatherUnit } = useContext(WeatherUnitContext);
  const classes = useStyles();

  return (
    <Box
      className={`${classes.container} ${active ? 'active' : ''}`}
      onClick={() => handleDateChange(forecastDay.date)}
    >
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
          {weatherUnit === 'C'
            ? forecastDay.day.mintemp_c
            : forecastDay.day.mintemp_f}
          <sup style={{ fontSize: 8 }}>o</sup>
        </Typography>
        <Typography>
          {weatherUnit === 'C'
            ? forecastDay.day.maxtemp_c
            : forecastDay.day.maxtemp_f}
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
