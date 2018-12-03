var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var jwt_decode = require('jwt-decode');
var mongoose = require('mongoose');
var config = require('../config');
var User = require('../model/user');
var Friend = require('../model/friends');
var Product = require('../model/product');
var History = require('../model/history');
var Recommend = require('../model/recommend');

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
    console.log(req);
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        admin: req.body.admin,
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


router.post('/addProduct', verifyToken, upload.single('productimage'), (req, res, next) => {
    console.log(req.file);
    let newProduct = new Product({
        productname: req.body.productname,
        productdescription: req.body.productdescription,
        productuses: req.body.productuses,
        vote:req.body.vote,
        productimage: req.file.path
    })

    Product.addProduct(newProduct, (err, user) => {

        if (err) { res.json("Registartion failed") }
        else {
            res.json({
                "success": "added Successfull",
            });
        }
    })
})
router.post('/savehistory', verifyToken, (req, res, next) => {
    console.log(req.file);
    var date = new Date();
    var current_hour = date.getHours();
    var decoded = jwt_decode(req.token);
    let newHistory = new History({
        username: decoded.user.username,
        searchedContent: req.body.searchedContent,
        date: date,
    })

    History.addHistory(newHistory, (err, user) => {

        if (err) { res.json("Registartion failed") }
        else {
            res.json({
                "success": "added Successfull",
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

router.post('/profileById', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var username = { username: req.body.username}
            User.getUserByUserName(username, (err, user) => {
                if (err) { throw err }
                if (!user) { res.json({ "message": "user not found" }); }
                else {
                        res.send(user);
                }
            })

        }
    })

})
router.post('/getProductByName', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var username = { productname: req.body.productname }
            Product.getUserByProductName(username, (err, user) => {
                if (err) { throw err }
                if (!user) { res.json({ "message": "user not found" }); }
                else {
                    res.json(user);
                }
            })
        }
    })

})

router.post('/loaduserhistory', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var decoded = jwt_decode(req.token);
            console.log(decoded);
            var username = { username: decoded.user.username }
            History.getHistoryByUsername(username, (err, user) => {
                if (err) { throw err }
                if (!user) { res.json({ "message": "user not found" }); }
                else {
                    res.json(user);
                }
            })
        }
    })

})
router.post('/loadAlluserhistory', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var decoded = jwt_decode(req.token);
            console.log(decoded);
            var username = {}
            History.getHistoryByUsername(username, (err, user) => {
                if (err) { throw err }
                if (!user) { res.json({ "message": "user not found" }); }
                else {res.json(user);}
            })
        }
    })

})
router.post('/allprofiles', verifyToken, (req, res, next) => {
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
                    console.log(user);
                     res.json(user);
                }
            })

        }
    })

})
router.post('/getAllProducts', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var decoded = jwt_decode(req.token);
            console.log(decoded);
            var email = {};
            Product.getAllProducts(email, (err, user) => {
                if (err) { throw err }
                else {
                    console.log('yes');
                    res.json(user);
                }
            })

        }
    })

})


router.post('/getAllRecommendations', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var decoded = jwt_decode(req.token);
            console.log(decoded);
            var email = {};
            Recommend.getRecommendedPosts(email, (err, user) => {
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

router.post('/saverecommend', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var decoded = jwt_decode(req.token);
            console.log(req.body.friend);
            let newFriend = new Recommend({
                username: decoded.user.username,
                productname: req.body.productname,
                recommendTo: req.body.recommendTo,
                description: req.body.description
            })

            Recommend.addRecommend(newFriend, (err, user) => {

                if (err) throw err;
                else {
                    res.json({
                        "success": " request sent",
                    });
                }
            })

        }
    })

});

router.post('/clearuserhistory', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(yes);
        }
        else {
            var decoded = jwt_decode(req.token);
            let newFriend = { username: decoded.user.username }

            History.clearUserHistory(newFriend, (err, posts) => {

                if (err) throw err;
                else {
                    res.json({ message: 'deleted' });
                }
            })

        }
    })

})
router.post('/getRecommendedPosts', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var decoded = jwt_decode(req.token);
            let newFriend = { recommendTo: decoded.user.username }
           
            Recommend.getRecommendedPosts(newFriend, (err, posts) => {

                if (err) throw err;
                else {
                    res.json(posts);
                }
            })

        }
    })

})
router.post('/getFriendRequests', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {

            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var decoded = jwt_decode(req.token);
            console.log(decoded);
            var friendRequests = {
                friend: decoded.user.username,
                status: req.body.status
            }
            Friend.getFriendByStatus(friendRequests, (err, users) => {
                if (err) { throw err }
                else {
                    console.log(users);
                    res.json(users);
                }
            })

        }
    })

})
router.post('/getAllFriendRequests', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {

            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var decoded = jwt_decode(req.token);
            console.log(decoded);
            
            Friend.getFriendByStatus((err, users) => {
                if (err) { throw err }
                else {
                    console.log(users);
                    res.json(users);
                }
            })

        }
    })

})
router.post('/acceptFriend', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var decoded = jwt_decode(req.token);
            console.log(req.body.friend);
            let acceptFriend = {
                username: req.body.friend,
                friend: decoded.user.username,
            }
            console.log(acceptFriend);
            Friend.updateFriendRequest(acceptFriend, (err, friend) => {

                if (err) throw err;
                else {
                    console.log(friend);
                    friend.status = true;
                    friend.save(function (err) {
                        if (err) throw err;
                        else {
                            res.json({
                                "success": " request Accepted",
                            });
                        }
                    })

                }});
    
        }
    })

})

router.post('/makeAdmin', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.send('yes');
        }
        else {
            let makeAdmin = { username: req.body.username };
            User.getUserByUserName(makeAdmin, (err, user) => {

                if (err) throw err;
                else {
                    console.log(user);
                    user.admin = 'true';
                    user.save(function (err) {
                        if (err) throw err;
                        else {
                            res.json({
                                "success": " New Admin",
                            });
                        }
                    })

                }});
    
        }
    })

})
router.post('/onVote', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var decoded = jwt_decode(req.token);
            console.log(req.body.friend);
            let acceptFriend = {
                productname: req.body.productname,
            }
            console.log(acceptFriend);
            Product.getUserByProductName(acceptFriend, (err, product) => {

                if (err) throw err;
                else {
                    console.log(product);
                    var count = product.vote;
                    count = count + 1;
                    product.vote = count;
                    product.save(function (err) {
                        if (err) throw err;
                        else {
                            res.json({
                                "success": "voted",
                            });
                        }
                    })

                }});
    
        }
    })

})
router.post('/deleteFriend', verifyToken, (req, res, next) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            console.log(req.token);
            res.sendStatus(403);
        }
        else {
            var decoded = jwt_decode(req.token);
            console.log(req.body.friend);
            let acceptFriend = {
                username: req.body.friend,
                friend: decoded.user.username,
            }
            console.log(acceptFriend);
            Friend.updateFriendRequest(acceptFriend, (err, friend) => {

                if (err) throw err;
                else {
                    console.log(acceptFriend);
                    friend.deleteOne({ acceptFriend }, function (err) {
                        if (err) throw err;
                        else {
                            res.json({
                                "success": " request Deleted",
                            });}
                    })
                    
                    }});
    
        }
    })

   })

router.post('/adminlogin', (req, res, next) => {

    let authenicate = {
        email: req.body.email,
        password: req.body.password,
    }
    console.log(authenicate);
    User.getUserByUserName(authenicate, (err, user) => {
        console.log(user.admin);
        if (err) { throw err }
        if (!user) { res.json({ "message": "user not found" }); }
        else if (user.admin == false) { res.json({ "message": "not an Admin"})}
        else {
            var users = { user };
            const token = jwt.sign(users, config.secret,
                {
                    expiresIn: 6048000 // 1 week
                });
            res.json({
                success: true,
                token: token,
                user
            });
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