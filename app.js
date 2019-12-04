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

// changed to
app.get("/menu", (req, res) => {
  connection.query("SELECT * FROM menu", (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ data: result });
    }
  });
});

app.get("/customerorder", (req, res) => {
  connection.query(
    "SELECT * FROM customer ORDER BY id DESC LIMIT 1",
    (err, result) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({ data: result });
      }
    }
  );
});

app.get("/staffaccounts", (req, res) => {
  connection.query("SELECT * FROM staffaccounts", (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ data: result });
    }
  });
});

app.get("/login", (req, res) => {
  const { name, phone } = req.query;
  connection.query(
    `INSERT INTO customer (name,phone) VALUES ('${name}','${phone}' )`,

    (error, results) => {
      if (error) {
        return res.send(err);
      }
    }
  );
});

app.get("/managemenu", (req, res) => {
  const { id, name, price, imageURL, category } = req.query;
  connection.query(
    `INSERT INTO menu (id,name,price,imageURL,category) VALUES ('${id}','${name}','${price}','${imageURL}','${category}' )`,

    (error, results) => {
      if (error) {
        return res.send(err);
      }
    }
  );
});

app.get("/drinks", (req, res) => {
  connection.query("SELECT * FROM drinks", (err, result) => {
    if (err) throw err;
    else {
      return res.json({ data: result });
    }
    res.end(JSON.stringify(results));
  });
});

app.listen(4000, () => {
  console.log("4000");
});
