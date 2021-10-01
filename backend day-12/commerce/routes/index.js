var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const sess = req.session();
  sess.username = "anushka";
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  console.log('Redis value', req.session.username);
  res.render('index', { title: 'Express' });
});

module.exports = router;
