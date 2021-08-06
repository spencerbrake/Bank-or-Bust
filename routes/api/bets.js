const express = require('express');
const router = express.Router();
const betsCtrl = require('../../controllers/api/bets')

router.get('/', betsCtrl.index);
router.use(require('../../config/auth'));
router.post('/', checkAuth, betsCtrl.create);
router.delete('/:id', betsCtrl.delete);
router.put('/:id', betsCtrl.update);


/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router 