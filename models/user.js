var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-service');

var userSchema = new Schema({
    firstName: {type: String, required: 'please enter your first name'},
    lastName: {type: String, required: 'please enter your last name'},
    roomNumber: {type: Number, required: 'please enter your room number', min: [100, 'not a valid room number']},
    email: {type: String, required: 'please enter your email'},
    password: {type: String, required: 'please enter your password'},
    created: {type: Date, default: Date.now}
  
});

userSchema.path('email').validate( function(value, next){
                                                          userService.findUser(value, function(err, user){
                                                                                                               if (err) {
                                                                                                                         console.log( err );
                                                                                                                         return next(false);

                                                                                                                        }
                                                                                                                next(!user);

                                                                                                        }
                                                                            ); 
                                                         },
                                  'that email is already in use'
                                 );


var User = mongoose.model('User', userSchema);

module.exports = { User: User };