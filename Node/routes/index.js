/* 
  主路由文件
*/

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('123', { title: 'Express' });
});

module.exports = router;
