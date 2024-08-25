const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    id:String,
    name:String,
    description:String,
}, {timestamps: true});


const comments = new mongoose.model("comments", commentSchema);

module.exports = comments;