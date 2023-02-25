import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 120,
    borderWidth: 1,
    borderRadius: theme.spacing(1),
    borderColor: 'black',
    borderStyle: 'solid',
    padding: theme.spacing(1),

    '&.active': {
      background: '#11192880',
    },
  },
  weatherIcon: {
    width: 48,
  },
  sunriseBox: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
}));
