var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: string,
    roomNumber: Number,
    email: String,
    password: String,
    created: {type:Date, default: Date.now}
  
});

var User = mongoose.model('User', Schema);

model.exports = { User: User };