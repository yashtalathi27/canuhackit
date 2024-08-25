const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name1: String,
  id: String,
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const ReviewS = new mongoose.model("ReviewS", reviewSchema);

module.exports = ReviewS;
