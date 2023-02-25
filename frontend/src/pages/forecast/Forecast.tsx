import { FC, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fetchForecast } from '../../services/api';
import { formatDateTime } from '../../utils/common';
import { ForecastType } from '../../models/forecast';
import CurrentWeather from './current-weather';
import WeatherForecast from './weather-forecast';
import { useStyles } from './Forecast.styles';
import { cities } from './Forecast.constants';

const Forecast: FC = () => {
  const [activeCity, setActiveCity] = useState('Reno');
  const [forecastData, setForecastData] = useState<ForecastType | undefined>(
    undefined,
  );
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const resp = await fetchForecast(activeCity);
      if (resp.success) {
        setForecastData(resp.data);
      }
    })();
  }, [activeCity]);

  const handleCityChange = (event: SelectChangeEvent) => {
    setActiveCity(event.target.value);
  };

  return (
    <Container>
      <Box className={classes.container}>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" textAlign="left">
            {formatDateTime()}
          </Typography>

          <FormControl sx={{ mt: 3, width: 240 }} size="small">
            <InputLabel id="select-city">City</InputLabel>
            <Select
              labelId="select-city"
              id="select-city"
              name="city"
              value={activeCity}
              label="City"
              onChange={handleCityChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {cities.map(city => (
                <MenuItem key={city.value} value={city.value}>
                  {city.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        {forecastData && <CurrentWeather data={forecastData.current} />}
        <WeatherForecast data={forecastData?.forecast.forecastday ?? []} />
      </Box>
    </Container>
  );
};

export { Forecast };
