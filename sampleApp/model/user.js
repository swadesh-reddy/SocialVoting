var express = require("express");
var mongoose = require("mongoose");


var UserSchema = mongoose.Schema({

    username: String,
    password: String,
    email: String,
    contact:Number,
    propic: String 
})
var user = mongoose.model('user', UserSchema);

module.exports = user;
module.exports.getUserByUserName = function (authenication, callback) {
    console.log(authenication);
    user.findOne(authenication, callback);
}
module.exports.getAllProfiles = function (callback) {
    user.find({}, callback);
}
module.exports.getUserByEmail = function (username, callback) {
    console.log(email);
    user.findOne(email, callback);
}
module.exports.addUser = function (newUser, callback) { 

    newUser.save(callback)
}
 