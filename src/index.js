const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./model");
app.use(express.static("./model"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const client = require('../dataBase/dataBase.js');

app.get("/digitalWatch", client.user);
// app.get("/digitalwatch", (req, res) => {
//   res.render("index");
// });

app.listen(3000);
