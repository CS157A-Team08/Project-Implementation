const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "157a",
  password: "CS157Apass",
  database: "cs157a"
});
connection.connect(err => {
  if (err) {
    return err;
  }
});
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/menu", (req, res) => {
  connection.query("SELECT * FROM menu", (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ data: result });
    }
  });
});

app.get("/drinks", (req, res) => {
  connection.query("SELECT * FROM drinks", (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ data: result });
    }
  });
});

app.listen(4000, () => {
  console.log("4000");
});
