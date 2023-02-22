import { ForecastType } from '../models/forecast';
import { axg } from './axios';

export async function fetchForecast(city: string): Promise<ForecastType> {
  return axg(
    `/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&days=14`,
  );
}
