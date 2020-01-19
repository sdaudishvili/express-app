const express = require("express");
const router = express.Router();
const ContactsController = require("../controllers/ContactsController");

router.get("/", function(req, res, next) {
  new ContactsController({
    params: req.params,
    query: req.query,
    body: req.body,
    send: (statusCode, data) => {
      sendFunc(res, statusCode, data);
    }
  }).getContacts();
});

function sendFunc(res, statusCode, data) {
  res.status(statusCode).send(data);
}

module.exports = router;
