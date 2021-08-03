const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betSchema = new Schema({
    game: String,
    team: String,
    type: String,
    odds: Number,
    amount: Number,
    result: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Bet', betSchema);