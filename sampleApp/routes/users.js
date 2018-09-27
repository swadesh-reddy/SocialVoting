var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var mongoose = require('mongoose');
var config = require('../config');
var User = require('../model/user');



router.post('/register', (req, res, next) => {

    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })

    User.addUser(newUser, (err, user) => {

        if (err) { res.send("Registartion failed") }
        else {
            res.send("Registration Successfull");
        }
    })
})

router.post('/login', (req, res, next) => {

    let authenicate = {
        email: req.body.email,
        password: req.body.password
    }
    User.getUserByUserName(authenicate, (err, user) => {

        if (err) { throw err }
        if (!user) { res.send("user not found"); }
        else {
          var users = {user};
            const token = jwt.sign(users, config.secret,
                {
                    expiresIn: 6048000 // 1 week
                });
            console.log(config.secret);
            res.json({
                success: true,
                token: token,
                user: {
                    id: user._id,
                    name: user.name,
                    username: user.username,
                    email: user.email
                }
            });
        }
    })
})

router.get('/profile', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, authData) => {
        console.log(req.body);
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            console.log(authData);
            res.json({
                authData
            })
        }
    })
       
})


function verifyToken(req, res, next) {

    const bearHeader = req.headers['authorization'];
    if (typeof bearHeader !== "undefined") {

        const bearer = bearHeader.split(' ');
        const bearToken = bearer[1];
        console.log(req.token);
        req.token = bearToken;
        next();
    }
    else
    {
        console.log(req.body);
        res.sendStatus(403);
    }

}

module.exports = router;