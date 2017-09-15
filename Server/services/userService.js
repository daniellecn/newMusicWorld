var User = require('../models/user');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = {
    addUser: function (req_body, callback) {
        var user = new User();

        var objectId = new ObjectID();
        user.id = objectId.toHexString();
        user.userName = req_body.userName;
        user.firstName = req_body.firstName;
        user.lastName = req_body.lastName;
        user.password = req_body.password;

        User.findOne({ 'userName': user.userName }, function (user) {
            if (user) {
                console.log('add user error: user already exist');
                return callback(error);
            }
            else {
                user.save(function (error, user) {
                    if (error) {
                        console.log('add user error: ' + error);
                        return callback(error);
                    }
                    callback(null, user);
                });
            }
        })
    },

    verifyUser: function (req_body, callback) {
        User.findOne({ 'userName': req_body.userName, 'password': req_body.password }, function (error, user) {
            if (error) {
                console.log('get user error ' + error);
                return callback(error);
            }
            callback(user);
        });
    }
};