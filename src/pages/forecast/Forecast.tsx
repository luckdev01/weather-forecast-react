import React, { FC, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useStyles } from './Forecast.styles';
import { fetchForecast } from '../../services/api';
import { ForecastType } from '../../models/forecast';
import CurrentWeather from './current-weather';

const Forecast: FC = () => {
  const [forecastData, setForecastData] = useState<ForecastType | undefined>(
    undefined,
  );
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const data = await fetchForecast('Reno');
      setForecastData(data);
    })();
  }, []);

  return (
    <Container>
      <Box className={classes.container}>
        <Box>
          <Typography variant="subtitle1" textAlign="left">
            Reno, Nevada, United States
          </Typography>
          <Typography variant="subtitle1" textAlign="left">
            {new Date().toLocaleString('en-US', {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
              weekday: 'short',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            })}
          </Typography>
        </Box>
        {forecastData && <CurrentWeather data={forecastData.current} />}
      </Box>
    </Container>
  );
};

export { Forecast };
