var express = require('express');
var requestify = require('requestify');
var router = express.Router();
/* GET home page. */

router.get('/', function(req, res, next) {
  requestify.get("http://api.icndb.com/jokes/random")
  	.then(function(response){
  		console.log(response.getBody().value.joke);
  		res.render('index',{chucknorrisquotes: response.getBody().value.joke});
  	});
});

router.get('/homepage', function(req, res, next) {
  res.render('homepage');
});


module.exports = router;
