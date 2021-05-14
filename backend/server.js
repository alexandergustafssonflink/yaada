const express = require("express");
const app = express();

app.listen(5000);

app.get("/email/:message", function (req, res) {
  console.log(req.params.message);
});

app.get("/:hej", function (req, res) {
  console.log(req.params.hej);
});
