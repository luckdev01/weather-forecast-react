import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(3),
  },
  weatherUnit: {
    marginLeft: theme.spacing(1),
    cursor: 'pointer',
    '&.active': {
      textDecoration: 'underline',
    },
  },
}));
