﻿var express = require("express");
var mongoose = require("mongoose");

var friends = mongoose.Schema({
    username: String,
    friend: String,
    status: Boolean
})
var friend = mongoose.model('friend', friends);

module.exports = friend;

module.exports.addFriend = function (newFriend, callback) {

    newFriend.save(callback)
}
module.exports.getFriendByUsername = function (newFriend, callback) {

    user.findOne(newFriend, callback);
}