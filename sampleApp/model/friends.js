var express = require("express");
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

    friend.findOne(newFriend, callback);
}
module.exports.getFriendByStatus = function (newFriend, callback) {

    friend.find(newFriend, callback);
}
module.exports.updateFriendRequest = function (acceptFriend,  callback) {

    friend.findOne(acceptFriend, callback);
}
module.exports.deleteFriendRequest = function (acceptFriend, callback) {

    friend.findOne(acceptFriend, callback);
}
