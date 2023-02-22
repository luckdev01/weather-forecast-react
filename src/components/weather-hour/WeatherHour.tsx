import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IHour } from '../../models/forecast';
import { useStyles } from './WeatherHour.styles';

interface Props {
  hour: IHour;
}

const WeatherHour = ({ hour }: Props) => {
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
      <Box display="flex" justifyContent="space-around">
        <Typography>
          {hour.temp_c}
          <sup style={{ fontSize: 8 }}>o</sup>
        </Typography>
      </Box>
    </Box>
  );
};

export { WeatherHour };
