var express = require('express');
var router = express.Router();

const cards = {
    'Supermarket':[{id : 1, name : 'meat', mandarin : '肉'},
                  {id : 2, name : 'pork', mandarin : '豬肉'},
                  {id : 3, name : 'beef', mandarin : '牛肉'},
                  {id : 4, name : 'chicken', mandarin : '雞肉'},
                  {id : 5, name : 'seafood', mandarin : '海鮮'},
                  {id : 6, name : 'vegetable', mandarin : '蔬菜'},
                  {id : 7, name : 'chips', mandarin : '洋芋片'},
                  {id : 8, name : 'instant noodles', mandarin : '泡麵'},
                  {id : 9, name : 'rice', mandarin : '米'}],
    'Campus':[{id : 1, name : 'classroom', mandarin : '教室'},
            {id : 2, name : 'blackboard', mandarin : '黑板'},
            {id : 3, name : 'chalk', mandarin : '粉筆'},
            {id : 4, name : 'stadium', mandarin : '體育館'},
            {id : 5, name : 'cafeteria', mandarin : '自助餐廳'},
            {id : 6, name : 'professor', mandarin : '教授'},
            {id : 7, name : 'teacher', mandarin : '教師'},
            {id : 8, name : 'student', mandarin : '學生'}],
    'Restaurant':[{id : 1, name : 'meal', mandarin : '餐點'},
                {id : 2, name : 'spaghetti', mandarin : '義大利麵'},
                {id : 3, name : 'soup', mandarin : '湯'},
                {id : 4, name : 'chopsticks', mandarin : '筷子'},
                {id : 5, name : 'spoon', mandarin : '湯匙'},
                {id : 6, name : 'fork', mandarin : '叉子'},
                {id : 7, name : 'knife', mandarin : '刀子'},
                {id : 8, name : 'menu', mandarin : '菜單'},
                {id : 9, name : 'beef noodles', mandarin : '牛肉麵'}],
    'Zoo':[{id : 1, name : 'pandas', mandarin : '熊貓'},
                {id : 2, name : 'bear', mandarin : '熊'},
                {id : 3, name : 'polar bear', mandarin : '北極熊'},
                {id : 4, name : 'penguin', mandarin : '企鵝'},
                {id : 5, name : 'giraffe', mandarin : '長頸鹿'},
                {id : 6, name : 'monkey', mandarin : '猴子'},
                {id : 7, name : 'lion', mandarin : '獅子'},
                {id : 8, name : 'tiger', mandarin : '老虎'}],
    'Breakfast':[{id : 1, name : 'toast', mandarin : '吐司'},
                {id : 2, name : 'hamburger', mandarin : '漢堡'},
                {id : 3, name : 'omelette', mandarin : '歐姆蛋'},
                {id : 4, name : 'rice ball', mandarin : '飯糰'},
                {id : 5, name : 'steamed bun', mandarin : '饅頭'},
                {id : 6, name : 'congee', mandarin : '粥'},
                {id : 7, name : 'Xiao Long Bao', mandarin : '小籠包'}],
    'Softdrinks':[{id : 1, name : 'milk tea', mandarin : '奶茶'},
                {id : 2, name : 'black tea', mandarin : '紅茶'},
                {id : 3, name : 'green tea', mandarin : '綠茶'},
                {id : 4, name : 'fruit tea', mandarin : '水果茶'},
                {id : 5, name : 'bubble milk tea', mandarin : '珍珠奶茶'},
                {id : 6, name : 'ice', mandarin : '冰塊'},
                {id : 7, name : 'cola', mandarin : '可樂'},
                {id : 8, name : 'sprites', mandarin : '雪碧'}]
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
