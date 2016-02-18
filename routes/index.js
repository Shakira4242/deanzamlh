var express = require('express');
var request = require('request');
var router = express.Router();
/* GET home page. */

router.get('/', function(req, res, next) {
  request("http://api.icndb.com/jokes/random",function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	joke = JSON.parse(body);
	    res.render('index',{chucknorrisquotes: joke.value.joke});
	  }
  });
});

router.get('/homepage', function(req, res, next) {
  res.render('homepage');
});


module.exports = router;
