import express from "express";
import mysql from "mysql";

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const app = express();
const con = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Diego Senese')`;
con.query(sql);
con.end();

app.get("/", (req, res) => {
  const con = mysql.createConnection(config);
  let html = "<h1>Full Cycle Rocks!</h1>";
  const results = con.query(
    "SELECT * FROM people;",
    (error, results, field) => {
      for (var result of results) {
        html += `- ${result.name}<br>`;
      }
      res.send(html);
    }
  );

  con.end();
});

app.listen(3000, () => {
  console.log("Express rodando na porta 3000");
});
