var express = require('express');
var router = express.Router();

const cards = {
    'Supermarket':[{id : 1, name : 'meat', mandarin : '肉'},
                  {id : 2, name : 'pork', mandarin : '豬肉'},
                  {id : 3, name : 'beef', mandarin : '牛肉'},
                  {id : 4, name : 'chicken', mandarin : '海鮮'},
                  {id : 5, name : 'seafood', mandarin : '海鮮'},
                  {id : 6, name : 'vegetable', mandarin : '蔬菜'},
                  {id : 7, name : 'chips', mandarin : '洋芋片'},
                  {id : 8, name : 'instant noodles', mandarin : '泡麵'},
                  {id : 9, name : 'rice', mandarin : '米'}]
    };



router.get('/:id', function(req, res) {
    res.send(cards[req.params.id]);
//   res.send('user' + req.params.id);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(cards);
});

module.exports = router;
