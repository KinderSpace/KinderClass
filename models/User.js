const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({});

const User = model("User", userSchema);

module.exports = User;
