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
// route will handle all request and routes no matter destination
// This might need to be refactored if we want to handle different destinations
// in unique ways but good for the purpose of the current middle server
app.all('/*', (req, res) => {
  const { method, params, data } = req;
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp${req.url}`;
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
