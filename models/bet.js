const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betSchema = new Schema({
    game: {type: String, required: true},
    team: {type: String, required: true},
    type: {type: String, required: true},
    odds: {type: String, required: true},
    amount: {type: Number, required: true},
    result: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Bet', betSchema);