var express = require("express");
var mongoose = require("mongoose");

var history = mongoose.Schema({
    username: String,
    searchedContent: String,
    date: Date
})
var history = mongoose.model('history', history);

module.exports = history;

module.exports.addHistory = function (newhistory, callback) {

    newhistory.save(callback)
}
module.exports.getHistoryByUsername = function (username, callback) {

    history.find(username, callback);
}
module.exports.clearUserHistory = function (username, callback) {

    history.remove(username, callback);
}
