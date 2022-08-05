const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./model");
app.use(express.static("./model"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const client = require("../dataBase/dataBase.js");
const router = require('../dataBase/dataBase.js');

app.get("/list", client.user);
app.get("/digitalwatch", (req, res) => {
  res.render("index");
});
app.post("/listUser", client.newUser);
//Pegar todos os dados do banco de dados e gerar uma tabela no front-end

app.listen(3000);

