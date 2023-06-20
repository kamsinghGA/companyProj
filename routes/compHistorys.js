var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('compHistorys', { title: 'Company History' });
});

module.exports = router;