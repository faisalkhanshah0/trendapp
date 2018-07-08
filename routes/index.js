var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 res.json({stauts:1,data:{}});
});
router.get('/test', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 res.json({staut:0,data:{}});
});
module.exports = router;
