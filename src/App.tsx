import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { WeatherUnitContextProvider } from './contexts/weather-unit.context';
import theme from './theme';
import Forecast from './pages/forecast';
import './App.css';

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <WeatherUnitContextProvider>
            <Forecast />
          </WeatherUnitContextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
