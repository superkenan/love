var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/turn', function(req, res, next) {
  res.render('turntable');
});

router.post('/login',function(req,res,next){
  console.log(req.body.name);
  console.log(req.body.password);
  res.writeHead(200);
  res.end();
});

router.post('/logup',function(req,res,next){
});

module.exports = router;
