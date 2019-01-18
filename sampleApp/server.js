var express = require("express");
var app = express();
const path = require('path');
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
var config = require("./config");
var cors = require("cors");
var users = require("./routes/users");
var port = process.env.PORT || 3000;
var url = config.database;
const router = express.Router();
const jwt = require('jsonwebtoken');

app.use(cors());
mongoose.connect(url, config.parser);

mongoose.connection.on('connected', () => { console.log("connected") })

mongoose.connection.on('error', (error) => { console.log(error) });
app.use(express.static(path.join(path.resolve(), 'public')));
app.use('/images', express.static('images'))

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send("this is home page");
})
app.get('*', function (req, res) {
    res.sendFile(path.join(path.resolve(), 'public/index.html'))
})
app.use('/users', users);


app.listen(port, () => console.log("started"));
