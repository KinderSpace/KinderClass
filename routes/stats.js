const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Match = require("../models/Match");

router.get("/", (req, res, next) => {
  User.find()
    .populate("matches")
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

module.exports = router;
