const express = require("express");
const router = express.Router();
const AboutController = require("../../controllers/aboutController");

router.get("/", function(req, res, next) {
  new AboutController({
    params: req.params,
    query: req.query,
    body: req.body,
    send: (statusCode, data) => {
      sendFunc(res, statusCode, data);
    }
  }).getAbout();
});

function sendFunc(res, statusCode, data) {
  res.status(statusCode).send(data);
}

module.exports = router;
