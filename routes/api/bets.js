const express = require('express');
const router = express.Router();
const betsCtrl = require('../../controllers/api/bets')

router.get('/', betsCtrl.index);
router.post('/', betsCtrl.create);

module.exports = router 