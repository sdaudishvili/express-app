const express = require("express");
const router = express.Router();
const BooksListController = require("../controllers/booksListController");

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", function(req, res) {
  res.send("Birds home page");
});

router.get("/books", function(req, res, next) {
  const a = new BooksListController({
    params: req.params,
    query: req.query,
    body: req.body,
    send: (statusCode, data) => {
      if (statusCode === 500) {
        console.log(data);
        res.status(500);
        next(data);
      } else {
        res.status(statusCode).send(data);
      }
    }
  });
  a.getBooks();
});

// define the about route
router.get("/about", function(req, res) {
  res.send("About birds");
});

module.exports = router;
