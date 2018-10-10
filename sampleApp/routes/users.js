var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var jwt_decode = require('jwt-decode');
var mongoose = require('mongoose');
var config = require('../config');
var User = require('../model/user');
var Friend = require('../model/friends');

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './images/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
var upload = multer({ storage: storage });

router.post('/register', upload.single('propic'), (req, res, next) => {
    console.log(req.file);
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        contact: req.body.contact,
        propic: req.file.path
    })

    User.addUser(newUser, (err, user) => {

        if (err) { res.json("Registartion failed") }
        else {
            res.json({
                "success": "Registration Successfull",
                user
            });
        }
    })
})

router.post('/login', (req, res, next) => {

    let authenicate = {
        email: req.body.email,
        password: req.body.password
    }
    console.log(authenicate);
    User.getUserByUserName(authenicate, (err, user) => {

        if (err) { throw err }
        if (!user) { res.json({ "message": "user not found" }); }
        else {
            var users = { user };
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
                    email: user.email,
                    propic: user.propic
                }
            });
        }
    })
})

router.get('/profile', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var decoded = jwt_decode(req.token);
            console.log(decoded);
            var email = { email: decoded.user.email}
            User.getUserByEmail(email, (err, user) => {
                if (err) { throw err }
                if (!user) { res.json({ "message": "user not found" }); }
                else {
                    console.log(decoded);
                     res.send(user);
                }
            })

        }
    })

})
router.post('/profileById', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
              var email = { email: req.body.email}
            User.getUserByEmail(email, (err, user) => {
                if (err) { throw err }
                if (!user) { res.json({ "message": "user not found" }); }
                else {
                        res.send(user);
                }
            })

        }
    })

})

router.get('/allprofiles', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var decoded = jwt_decode(req.token);
            console.log(decoded);
            var email = { email: decoded.user.email}
            User.getAllProfiles((err, user) => {
                if (err) { throw err }
                else {
                    console.log(decoded);
                     res.json(user);
                }
            })

        }
    })

})

router.post('/friendrequest', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var decoded = jwt_decode(req.token);
            console.log(req.body.friend);
            let newFriend = new Friend({
                username: decoded.user.username,
                friend: req.body.friend,
                status: req.body.status
            })

            Friend.addFriend(newFriend, (err, user) => {

                if (err) throw err;
                else {
                    res.json({
                        "success": " request sent",
                    });
                }
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
    else {
        console.log(req.body);
        res.sendStatus(403);
    }

}

module.exports = router;