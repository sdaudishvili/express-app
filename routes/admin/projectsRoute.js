const express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
  res.render('projects', { title: 'Hey', message: 'projects page' });
});

module.exports = router;
