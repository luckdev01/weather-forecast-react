import { useState, createContext, PropsWithChildren } from 'react';
const WeatherUnitContext = createContext({
  weatherUnit: 'C',
  setWeatherUnit: (unit: string) => {},
});

const WeatherUnitContextProvider = ({ children }: PropsWithChildren<any>) => {
  const [weatherUnit, setWeatherUnit] = useState('C');

  return (
    <WeatherUnitContext.Provider value={{ weatherUnit, setWeatherUnit }}>
      {children}
    </WeatherUnitContext.Provider>
  );
};

export { WeatherUnitContext, WeatherUnitContextProvider };
