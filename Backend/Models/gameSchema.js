const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    id: String,
    name: String,
    image: String,
    description: String,

}, {timestamps: true});


const Games = new mongoose.model("games", gameSchema);

module.exports = Games;