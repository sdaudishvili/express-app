const express = require("express");
const router = express.Router();
const AboutController = require("../../controllers/aboutController");
const adminRoute = require("../../middlewares/adminRoute");

router.get("/", function(req, res, next) {
  new AboutController({
    params: req.params,
    query: req.query,
    body: req.body,
    send: ({ statusCode, data, err }) => {
      send({ statusCode, data, err }, res);
    }
  }).getAbout();
});

router.post("/", adminRoute, function(req, res, next) {
  new AboutController({
    params: req.params,
    query: req.query,
    body: req.body,
    send: ({ statusCode, err }) => {
      send({ statusCode, err }, res);
    }
  }).updateAbout();
});

function send({ statusCode, err, data }, res) {
  if (err === undefined) {
    if (statusCode === 201)
      console.log("About us has been succesfully updated");
    res.status(statusCode).send(data);
  } else {
    console.log(statusCode + " code while updating about us");
    console.log(err);
    res.status(statusCode).send(err);
  }
}

module.exports = router;
