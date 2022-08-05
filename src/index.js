const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./model");
app.use(express.static("./model"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const client = require("../dataBase/dataBase.js");
const lista = [];
app.get("/list", client.user);

app.post("/newUser", client.newUser, (req, res) => {
  const user = req.body.name;
  lista.push(user);
  res.redirect("/list");
});

app.get("/digitalwatch", (req, res) => {
  res.render("index");
});

module.exports = {
  lista,
};

app.listen(3000);
