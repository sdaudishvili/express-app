const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");

const PORT = config.get("api.port");
const HOST = config.get("api.host");
const app = express();

const router = require("./routing/routesCollection");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", router);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

app.listen(PORT, HOST);

console.log(`RESTful API server started on ${PORT}:${HOST}`);
