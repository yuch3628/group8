/*
  CONTROLLER FUNCTIONS - send data
  --------------------------------
  contributors:
    - Yun-Chien (write data in cards.json and define an API to send data)
*/


const cards = require('../model/cards.json');

var express = require('express');
var router = express.Router();

// get cards data in different id
router.get('/:id', function(req, res) {
    res.status(200).json(cards[req.params.id]);
});

// get cards data
router.get('/', function(req, res, next) {
  res.status(200).json(cards);
});

module.exports = router;
