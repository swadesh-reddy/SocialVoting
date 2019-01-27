var express = require("express");
var mongoose = require("mongoose");

var notification = mongoose.Schema({
    username: String,
    friendname: String,
    productname: String
})
var notification = mongoose.model('notification', notification);

module.exports = notification;

module.exports.addNotification = function (newNotification, callback) {

    newNotification.save(callback)
}
module.exports.getNotificationByUsername = function (username, callback) {

    notification.find(username, callback);
}
module.exports.clearUserNotification = function (username, callback) {

    notification.remove(username, callback);
}
