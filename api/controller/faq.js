/*
  CONTROLLER FUNCTIONS - send data
  --------------------------------
  contributors:
    - Yun-Chien (write data in faqData.json and define an API to send data)
*/

const faqData = require('../model/faqData.json');

var express = require('express');
var router = express.Router();


// get faqData data
router.get('/', function(req, res, next) {
  res.status(200).json(faqData.FAQ);
});

module.exports = router;
