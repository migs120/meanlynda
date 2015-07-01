var express = require('express');
var router = express.Router();

/* GET orders. */
router.get('/', function(req, res, next) {
  res.render('orders/index', { title: 'place an order' });
});

module.exports = router;