const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    googleId: String,
    displayName: String,
    email: String,
    image: String,
    profileSetup: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});


const games = new mongoose.model("games", gameSchema);

module.exports = games  ;