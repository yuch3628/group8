var express = require('express');
var router = express.Router();

// const users = [{
//     'Market':[{id : 1 , name : 'Egg', mandarin : '蛋', audio :
//     }
//     ]
//     }];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
