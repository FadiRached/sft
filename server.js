'use strict';
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var sqlite3 = require("sqlite3");
app.use(express.static("test"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", "views");
app.set("view engine", "pug");

const db = new sqlite3.Database('./SFT1.db', (err) => {
  if (err) {
    console.log(`Error Occured - ${err.message}`);
  } else {
    console.log('DataBase Connected');
  }
});

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS SFTs");
  db.run("CREATE TABLE IF NOT EXISTS SFTs (sft_name VARCHAR(100),sft_pic IMAGE,sft_rank INT,PRIMARY KEY(sft_name))");
  db.run("CREATE TABLE IF NOT EXISTS users (user_name VARCHAR(100),user_password  VARCHAR(100),PRIMARY KEY(user_name))");
  db.run("CREATE TABLE IF NOT EXISTS purchases (purchase_num INT,user_name VARCHAR(100),sft_name  VARCHAR(100), sft_purchase_rank INT,PRIMARY KEY(purchase_num))");
});

db.close();

app.get("/", function(req,res) {
  res.send("<h1>Hello CS225</h1>");
})

app.listen(3000);

