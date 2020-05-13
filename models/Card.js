const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cardSchema = new Schema({
  letter: String,
  category: String,
  name: String,
  image: String,
});

const Card = model("Card", cardSchema);

module.exports = Card;
