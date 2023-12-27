const mongoose = require("mongoose");

const Movie = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  publishingYear: {
    type: Number,
    required: false,
  },
  posterImage: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("movies", Movie);
module.exports = UserModel;
