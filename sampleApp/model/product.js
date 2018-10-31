var express = require('express');
var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({

    productname: String,
    productdescription: String,
    productuses: String,
    productimage: String,
    vote:Number
})
var product = mongoose.model('product', productSchema);
module.exports = product;

module.exports.getAllProducts = function (authenication, callback) {
    console.log(authenication);
    product.find(authenication, callback);
}
module.exports.getUserByProductName = function (authenication, callback) {
    console.log(authenication);
    product.findOne(authenication, callback);
}

module.exports.addProduct = function (newUser, callback) {

    newUser.save(callback)
}
