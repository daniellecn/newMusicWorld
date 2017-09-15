var db = require('../../Database');

exports.addUser = function (req, res) {
    db.addUser(req.body, function(error, user){
        if(error){
            res.json(error);
        }
        else{
            res.json();
        }
    });
};

exports.verifyUser = function (req, res){
    db.verifyUser(req.body, function(error, user){
        if(error){
            res.json(error);
        }
        else{
            res.json();
        }
    });
};