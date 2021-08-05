const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betSchema = new Schema({
    game: {type: String},
    team: {type: String},
    type: {type: String},
    odds: {type: String},
    amount: {type: Number},
    result: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Bet', betSchema);