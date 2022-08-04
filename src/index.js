const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", "./model");
app.use(express.static("./model"));

app.get("/digitalwatch", (req, res) => {
  res.render("index");
});

app.listen(3000);
