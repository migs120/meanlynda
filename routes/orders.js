var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');

/* GET orders. */
router.get('/', restrict, function(req, res, next) {
                                            //if (!req.isAuthenticated() )  {
                                              //                            return res.redirect('/');
                                                //                          }
                                            var vm = {
                                                      
                                                      title: 'place an order',
                                                      orderId: req.session.orderId,
                                                      firstName: req.user ? req.user.firstName : null
                                                      }
                                            res.render('orders/index', vm);
                                          }
          );

module.exports = router;