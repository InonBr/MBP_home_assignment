const axios = require('axios');

const symbolData = (obj, stocksApi) => {
  return axios.get(`${stocksApi}company/profile/${obj.symbol}`);
};

const getStocksImages = (arr, stocksApi, res) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    symbolData(arr[i], stocksApi).then(async (response) => {
      arr[i].id = i + 1;
      arr[i].allData = await response.data.profile;

      setTimeout;
      if (i + 1 > arr.length - 1) {
        setTimeout(() => {
          arr = arr.filter((stock) => stock.allData);

          return res.status(200).json({
            data: arr,
          });
        }, 3000);
      }
    });
  }
};

module.exports = { getStocksImages };
