const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  role: {
    type: String,
    enum: ["kid", "teacher"],
    default: "kid",
  },
  image_url: String,
  matches: [
    {
      type: Schema.Types.ObjectId,
      ref: "Match",
    },
  ],
});

const User = model("User", userSchema);

module.exports = User;
