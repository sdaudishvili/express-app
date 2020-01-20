const express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
  res.render('contacts', { title: 'Hey', message: 'contact page' });
});

module.exports = router;
