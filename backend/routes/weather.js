var express = require('express');
const { getForecast } = require('../services/weather.service');

var router = express.Router();

router.get('/', async function (req, res, next) {
  const { city, days } = req.query;

  if (!city) {
    return res.status(400).send({
      success: false,
      error: 'Invalid request. Parameter city is missing.',
    });
  }

  const resp = await getForecast({ q: city, days: days || 14 });

  res.send({ success: true, data: await resp.json() });
});

module.exports = router;
