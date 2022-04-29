'use strict';
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(express.static("test"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", "views");
app.set("view engine", "pug");

app.get("/", function(req,res) {
  res.send("<h1>Hello CS225</h1>");
})

app.post("/userPage", function(req, res){
  let html = `<h1>Welcome to the user page! Here is your username: ${req.body.username}</h1>`;
  res.send(html);
})
app.listen(3000);

