const { Pool } = require("pg");
const pg = require("pg").Pool;
const router = require("express").Router();
const app = require("../src/index.js");
const client = new Pool({
  user: "thqkpwob",
  host: "kesavan.db.elephantsql.com",
  database: "thqkpwob",
  password: "74oPAldu-IVYK1b1lFyGQhRia-NAkhPG",
  port: 5432,
});
const user = (req, res) => {
  client.query('SELECT * FROM "public"."visitas" LIMIT 100', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(result.rows);
  });
};

const newUser = (req, res) => {
  const text = "INSERT INTO visitas(id, nome) VALUES($1, $2) RETURNING *";
  const values = [app.lista];
  client.query(text, values, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
};
module.exports = {
  user,
  client,
  newUser,
};
