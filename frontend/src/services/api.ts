import { ForecastType } from '../models/forecast';
import { axg } from './axios';

export async function fetchForecast(
  city: string,
): Promise<{ success: boolean; data: ForecastType; error: string }> {
  return axg(`/weather?city=${city}`);
}
