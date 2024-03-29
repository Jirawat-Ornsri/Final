// index.js
const express = require("express");
const app = express();


const port = 8010;
const service = require("./routing/service");

app.use("/service", service);

app.get("/", function (req, res) {
  res.send("This is a web service. This is used as a port 8010.");
});


app.listen(port, function () {
  console.log(`Service Server listening at Port ${port}`);
});
