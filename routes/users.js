var express = require('express');
var router = express.Router();
var userService = require('../services/user-service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET users/views */
router.get('/create', function(req, res, next) {
  
  var vm =  {
            title:'create an account'
            };
  res.render('users/create', vm);
});

/* GET users/views */
router.post('/create', function(req, res, next) {
//  var somethingGoesWrong = false;
// if (somethingGoesWrong){
userService.addUser(req.body, function(err){
  if (err){
  var vm =  {
            title:'create an account',
            input: req.body,
            error:'something went wrong'
            };
  delete vm.input.password;
 return res.render('users/create', vm);
  }
  res.redirect('/orders');
});
});


module.exports = router;
