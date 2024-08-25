const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: Number,
      ref: "Post",
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const comments = new mongoose.model("comments", commentSchema);

module.exports = comments;
