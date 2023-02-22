import { createTheme } from '@mui/material/styles';
import { blue, common, lightBlue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[500],
    },
    secondary: {
      main: blue[800],
    },
    text: {
      primary: common.white,
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: common.white,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: common.black,
        },
      },
    },
  },
});

export default theme;
