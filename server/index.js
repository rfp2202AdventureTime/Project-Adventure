require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const console = require('console');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

// Set up get method and post method
// route will handle all request and routes no matter destination
// This might need to be refactored if we want to handle different destinations
// in unique ways but good for the purpose of the current middle server

// Get products use case:
// Note: ******might not need to pre-pend localhost. Let us know.*******
// axios.get('http://localhost:3000/products',(res, req) => {...})

// REQUEST DOCUMENTATION
// ------------------------------------------------------------------------------------------
// To make request to middle server -->
// provide entire route (incl. product_id, review_id, etc) after localhost:3000/xxxxx
// Example: "http://localhost:3000/products/65623/" where "65623" is a dynamic url piece
// Template literals might be considered the best way to handle dynamic request pieces
// on the clientside
// Be sure that you have configured your .env file to contain your personal GihHub token

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
    .then((result) => {
      const newData = result.data;
      res.send(newData);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
