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


router.post("/authenticate", function(req, res, next) {
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
    if (statusCode === 201)
      console.log("Contacts has been succesfully updated");
    res.status(statusCode).send(data);
  } else {
    console.log(statusCode + " code while updating contacts");
    console.log(err);
    res.status(statusCode).send(err);
  }
}


module.exports = router;
