const express = require("express");
const mysql = require("mysql");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const db = mysql.createConnection({
  host: "localhost",
  database: "sneakerz",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) throw err;

  const sql = "SELECT * FROM data_shoes";
  db.query(sql, (err, result) => {
    const shoes = JSON.parse(JSON.stringify(result));
    console.log("hasil database -> ", shoes);
    app.get("/", (req, res) => {
      res.render("product", { shoes: shoes });
    });
  });
});

export { shoes };

app.listen(8000, () => {
  console.log("Server ready");
});
