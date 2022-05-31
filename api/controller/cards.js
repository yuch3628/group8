// import cards from "../model/cards.json";
const cards = require('../model/cards.json');

var express = require('express');
var router = express.Router();


router.get('/:id', function(req, res) {
//     res.send(cards[req.params.id]);
    res.status(200).json(cards[req.params.id]);
//   res.send('user' + req.params.id);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json(cards);
});

module.exports = router;
