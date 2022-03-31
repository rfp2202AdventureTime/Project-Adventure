require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const console = require('console');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

// set up get method and post method
app.all('/*', (req, res) => {
  const { method, params, data } = req;
  const url = req.headers.url.toString();
  // "/products"
  // https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products
  console.log('updated url ', url);
  axios({
    url,
    method,
    params,
    data,
    headers: { Authorization: `${process.env.GITHUB_APIKEY}` },
  })
    .then(({ data }) => {
      console.log('data is', data);
      res.send(data);
    })
    .catch((err) => console.log(err));
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
