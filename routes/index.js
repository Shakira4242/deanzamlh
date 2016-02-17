var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('introduction',{introduction: 'Hello'});
});

router.get('/homepage', function(req, res, next) {
  res.render('homepage',{introduction: 'Hello'});
});


module.exports = router;
