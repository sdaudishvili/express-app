const express = require("express");
const router = express.Router();
const AdminController = require("../../controllers/AdminController");

router.post("/register", function(req, res, next) {
  new AdminController({
    params: req.params,
    query: req.query,
    body: req.body,
    send: ({ statusCode, data, err }) => {
      send({ statusCode, data, err }, res);
    }
  }).registerAdmin();
});

router.post("/adminAuthenticate", function(req, res, next) {
  new AdminController({
    params: req.params,
    query: req.query,
    body: req.body,
    send: ({ statusCode, data, err }) => {
      send({ statusCode, data, err }, res);
    }
  }).authenticateAdmin();
});

function send({ statusCode, err, data }, res) {
  if (err === undefined) {
    res.status(statusCode).send(data);
  } else {
    res.status(statusCode).send({ err });
  }
}

module.exports = router;
