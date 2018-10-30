var express = require("express");
var mongoose = require("mongoose");

var recommendation = mongoose.Schema({
    username: String,
    productname:String,
    recommendTo: String,
    description: String
})
var recommendation = mongoose.model('recommendation', recommendation);

module.exports = recommendation;

module.exports.addRecommend = function (newrecommend, callback) {

    newrecommend.save(callback);
    }
module.exports.getRecommendedPosts = function (username, callback) {

    recommendation.find(username, callback);
}
