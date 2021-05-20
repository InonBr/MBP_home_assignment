const axios = require('axios');

const symbolData = (obj, stocksApi) => {
  return axios.get(`${stocksApi}company/profile/${obj.symbol}`);
};

const getStocksImages = (arr, stocksApi, res) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    symbolData(arr[i], stocksApi).then(async (response) => {
      arr[i].id = i + 1;
      arr[i].allData = response.data.profile;

      if (i + 1 > arr.length - 1) {
        return res.status(200).json({
          data: arr,
        });
      }
    });
  }
};

module.exports = { getStocksImages };
