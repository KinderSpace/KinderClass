const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const matchSchema = new Schema({
  game: String,
  category: String,
  score: Number,
  tries: Number,
  date_played: Date,
});

const Match = model("Match", matchSchema);

module.exports = Match;
