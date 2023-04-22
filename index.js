const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

const categories = require("./data/categories.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("DRAGON IS RUNNING");
});

app.get("/categories", (req, res) => {
  console.log(categories);
  res.send(categories);
});

app.listen(port, () => {
  console.log(`dragon api is running on port: ${port}`);
});
