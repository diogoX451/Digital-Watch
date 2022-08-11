const { Pool } = require("pg");
const pg = require("pg").Pool;
const client = new Pool({
  user: "thqkpwob",
  host: "kesavan.db.elephantsql.com",
  database: "thqkpwob",
  password: "74oPAldu-IVYK1b1lFyGQhRia",
  port: 5432,
});
client.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected to database");
});
const user = (req, res) => {
  client.query('SELECT * FROM "public"."nome" LIMIT 100', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result.rows);
    }
  });
};
const newUser = (req, res) => {
  //passa valor do values para query
  const list = req.body;
  client.query("INSERT INTO nome(data) VALUES ($1)", [list], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/digitalwatch");
  });
};
const addUser = (req, res) => {
  client.query("SELECT data -> 'name' AS nome FROM nome ORDER BY NOME", (err, result) => {
    if (err) {
      console.log(err);
    }
    let lista = [];
    for (let i = 0; i < result.rows.length; i++) {
      var row = result.rows[i];
      lista.push(row.nome);
    }
    res.render("pageIntial", { todoDbList: lista });

  });
};
const deleteUser = (req, res) => {
  const id = req.params.id;
  client.query('DELETE FROM "public"."nome" WHERE "id" = $1', [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send("Deleted successfully");
  })
};

module.exports = {
  user,
  client,
  newUser,
  addUser,
  deleteUser
};
