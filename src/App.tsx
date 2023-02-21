import React from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Forecast from './pages/Forecast';
import './App.css';

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Forecast />
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
