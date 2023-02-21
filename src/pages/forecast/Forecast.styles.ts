import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: '1rem',
    backgroundColor: theme.palette.secondary.main,
  },
}));
