const express = require("express");
const router = express.Router();
const Card = require("../models/Card");
const Match = require("../models/Match");
const User = require("../models/User");

router.get("/tutti-frutti", (req, res, next) => {
  Card.find()
    .then((cardsFound) => {
      res.status(200).send({ cards: cardsFound });
    })
    .catch((err) => {
      res.json(err, { message: "Error while finding cards" });
    });
});

router.post("/tutti-frutti/:letter", (req, res, next) => {
  const user = req.user._id;
  const { score, tries } = req.body;
  const category = req.params.letter;
  //Get the game from the URL, split it and get the second element
  const game = req.route.path.split("/")[1];
  Match.create({
    game,
    category,
    score,
    tries,
    date_played: new Date(),
  })
    .then((match) => {
      return User.findByIdAndUpdate(user, {
        $push: { matches: match._id },
      }).then(() => {
        res.status(201);
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/math-mars", (req, res, next) => {
  const user = req.user._id;
  const { score, tries } = req.body;
  const game = req.route.path.split("/")[1];
  Match.create({
    game,
    category: "",
    score,
    tries,
    date_played: new Date(),
  })
    .then((match) => {
      return User.findByIdAndUpdate(user, {
        $push: { matches: match._id },
      }).then(() => {
        res.status(201);
      });
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
