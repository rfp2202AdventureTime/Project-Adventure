require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");


const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

// set up get method and post method
app.get('/*', (req, res) => {

  const { method, params, data } = req
  const url = req.headers.url.toString();
  console.log("updated url ", url)
  axios({
    url,
    method,
    params,
    data,
    headers: {'Authorization' : `${process.env.GITHUB_APIKEY}`}
  })
  .then(({ data }) => {
    // console.log("data is", data);
    res.send(data)
  })
  .catch(console.log)
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
