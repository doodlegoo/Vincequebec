// 
// Base found on expressjs.com - hello world
//

var express = require("express");

var port = 80;

var app = express();

app.get("/", function (req, res) {
  res.send("HI THIS IS A HOMEPAGE");
})

app.get("/speak/:animal", function (req, res) {
  res.send("The "+(req.params.animal).toUpperCase()+" says something");
})

app.get("/dog", function (req, res) {
  res.send("Doggies");
})

app.get("/cat", function (req, res) {
  res.send("Pussies");
})

app.get("*", function (req, res) {
  res.send("ERROR 404!");
})

app.listen(port, function () {
  console.log("Example app listening on "+port+"!");
});
