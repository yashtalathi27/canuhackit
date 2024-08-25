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

const Reviews = new mongoose.model("Reviews", reviewSchema);

module.exports = Reviews;
