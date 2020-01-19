const express = require("express");
const router = express.Router();
const BooksListController = require("../controllers/booksListController");

router.get("/", function(req, res, next) {
  new BooksListController({
    params: req.params,
    query: req.query,
    body: req.body,
    send: (statusCode, data) => {
      sendFunc(res, statusCode, data);
    }
  }).getBooks();
});

router.get("/about", function(req, res) {
  res.send("About birds");
});

function sendFunc(res, statusCode, data) {
  res.status(statusCode).send(data);
}

module.exports = router;
