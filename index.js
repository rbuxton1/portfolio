const express = require('express');
const app = express();
const yaml = require('require-yml');
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index");
});
app.get("/about", function(req, res){
  var info = yaml("./about.yaml");
  res.render("about", {info: info});
});

app.listen(PORT, function(){ console.log("Listening on: " + PORT); });
