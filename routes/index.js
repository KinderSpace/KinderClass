const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("terminal");
  res.json("alfonso banana");
});

module.exports = router;
