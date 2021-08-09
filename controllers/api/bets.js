const Bet = require('../../models/bet');

module.exports = {
    index,
    create,
    delete: deleteOne,
    update
}

async function index(req, res) {
    const bets = await Bet.find({user: req.user.id});
    console.log(bets)
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

async function update(req, res) {
    const updatedBet = await Bet.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedBet);
}