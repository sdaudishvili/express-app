const express = require("express");
const router = express.Router();
const ContactsController = require("../../controllers/ContactsController");

router.get("/", function(req, res, next) {
  new ContactsController({
    params: req.params,
    query: req.query,
    body: req.body,
    send: ({ statusCode, data, err }) => {
      send({ statusCode, data, err }, res);
    }
  }).getContacts();
});

router.post("/", function(req, res, next) {
  new ContactsController({
    params: req.params,
    query: req.query,
    body: req.body,
    send: ({ statusCode, err }) => {
      send({ statusCode, err }, res);
    }
  }).updateContacts();
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
