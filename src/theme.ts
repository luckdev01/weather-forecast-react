import { createTheme } from '@mui/material/styles';
import { blue, purple, common } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: blue[800],
    },
    text: {
      primary: common.white,
    },
  },
});

export default theme;
