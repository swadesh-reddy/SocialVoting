var mongoose = require('mongoose');
var config = require('../config');

var UserSchema = mongoose.Schema({

    username: String,
    password: String,
    email: String
})

var user = module.exports = mongoose.model('user', UserSchema);

module.exports.getUserByUserName = function (authenicate, callback) {

    console.log(authenicate);
    user.findOne(authenicate, callback);
}

module.exports.addUser = function(newUser, callback){

    newUser.save(callback)
}
