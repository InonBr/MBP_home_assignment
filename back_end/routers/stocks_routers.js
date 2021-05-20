const express = require('express');
const router = new express.Router();
const axios = require('axios');
const func = require('../functions/stocks');

const stocksApi =
  'https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/';

router.get('/stocks', (req, res) => {
  try {
    axios
      .get(`${stocksApi}search?query=&limit=50&exchange=NASDAQ`)
      .then((response) => {
        func.getStocksImages(response.data, stocksApi, res);
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ err: 'Server error', message: err.message });
  }
});

module.exports = router;
