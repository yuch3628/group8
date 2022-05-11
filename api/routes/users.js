var express = require('express');
var router = express.Router();

const users = [{
    'username': 'ADMIN',
    'password' :'ADMIN',
    'privilege' : 'ADMIN'},{
    'username': 'test',
    'password' :'test',
    'privilege' : 'user'
    }];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
