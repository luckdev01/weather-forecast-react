const fetch = require('node-fetch');

async function getForecast(params) {
  return fetch(
    `http://api.weatherapi.com/v1/forecast.json?${new URLSearchParams({
      key: process.env.WEATHER_API_KEY,
      ...params,
    })}`,
  );
}

module.exports = { getForecast };
