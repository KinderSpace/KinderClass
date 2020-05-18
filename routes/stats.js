const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Match = require("../models/Match");

router.get("/", (req, res, next) => {
  const { query, game } = req.query;
  console.log(game);
  User.find()
    .populate("matches")
    .then((users) => {
      filteredUsers = users.filter((user) => {
        return user.username.includes(query) && user.role != "teacher";
      });
      console.log(filteredUsers);
      res.status(200).json({ users: filteredUsers });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

module.exports = router;
