const Bet = require('../../models/bet');

module.exports = {
    index,
    create,
    delete: deleteOne
}

async function index(req, res) {
    const bets = await Bet.find({});
    res.status(200).json(bets);
}

async function create(req, res) {
    console.log(req.body)
    const bet = await Bet.create(req.body);
    res.status(201).json(bet);
} 

async function deleteOne(req, res) {
    const deletedBet = await Bet.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedBet);
}