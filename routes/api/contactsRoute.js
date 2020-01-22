const express = require("express");
const router = express.Router();
const ContactsController = require("../../controllers/ContactsController");

router.get("/", function(req, res, next) {
  new ContactsController({
    params: req.params,
    query: req.query,
    body: req.body,
    send: ({ statusCode, data }) => {
      sendFunc(res, statusCode, data);
    }
  }).getContacts();
});

router.post("/", function(req, res, next) {
  new ContactsController({
    params: req.params,
    query: req.query,
    body: req.body,
    send: ({ statusCode }) => {
      if (statusCode === 201) {
        console.log("Contact has been succesfully updated");
      } else {
        console.log(statusCode + "code while updating contacts");
      }
    }
  }).updateContacts();
  res.redirect("/");
});

function sendFunc(res, statusCode, data) {
  res.status(statusCode).send(data);
}

module.exports = router;
