// import faqData from "../model/faqData.json";
const faqData = require('../model/faqData.json');

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json(faqData.FAQ);
});

module.exports = router;
