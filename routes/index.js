var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/homepage', function(req, res, next) {
  res.render('homepage');
});


module.exports = router;
