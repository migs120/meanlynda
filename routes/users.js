var express = require('express');
var router = express.Router();
var passport = require('passport');
var config = require('../config');
var userService = require('../services/user-service');

/* GET users listing. */
router.get('/', function(req, res, next) {
                                          res.send('respond with a resource');
                                         }
          );


/* GET users/views */
router.get('/create', function(req, res, next) {
                                                  var vm =  {
                                                            title:'create an account'
                                                            };
                                                  res.render('users/create', vm);
                                                }
          );

/* GET users/views */
router.post('/create', function(req, res, next) {
//  var somethingGoesWrong = false;
// if (somethingGoesWrong){
userService.addUser(req.body, function(err){
                                            if (err){
                                                      console.log(err);
                                                      var vm =  {
                                                                title:'create an account',
                                                                input: req.body,
                                                                error:  err    //'something went wrong'
                                                                };
                                                      delete vm.input.password;
                                                      return res.render('users/create', vm);
                                                      }
                                            req.login(req.body, function(err){
                                                                              res.redirect('/orders');
                                                                             }
                                                     );
                                            //res.redirect('/orders');
                                          }
                   );
});

router.post('/login', 
            function (req, res, next ){
                                        req.session.orderId = 12345;
                                        if (req.body.rememberMe){
                                                                  req.session.cookie.maxAge = config.cookieMaxAge;
                                                                }
                                        next();
                                      },
            passport.authenticate('local', { 
                                            failureRedirect:'/', 
                                            successRedirect: '/orders', 
                                            failureFlash: 'Invalid credentials'
                                            } 
                                  )
           );


router.get('/logout', function(req, res, next){
                                                req.logout();
                                                req.session.destroy();
                                                res.redirect('/');
                                              } 
          );

module.exports = router;



















