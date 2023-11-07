const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
  res.render("result/index");
});

module.exports = router;
