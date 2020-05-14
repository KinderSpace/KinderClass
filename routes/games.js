const express = require("express");
const router = express.Router();
const Card = require("../models/Card");

router.get("/tutti-frutti", (req, res, next) => {
  Card.find()
    .then((cardsFound) => {
      console.log("cards found:", cardsFound);
      res.status(200).send({ cards: cardsFound });
    })
    .catch((err) => {
      res.json(err, { message: "Error while finding cards" });
    });
});

module.exports = router;
