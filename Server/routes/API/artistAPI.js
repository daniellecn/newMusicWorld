var db = require('../../Database');

exports.createArtist = function (req, res) {
    db.createArtist(req.body, function (error, artist) {
        if (error) {
            res.json(error);
        }
        else {
            res.json();
        }
    });
};

exports.updateArtist = function (req, res) {
    db.updateArtist(req.params.id, req.body, function (error) {
        if (error) {
            res.json({ 'status': false });
        }
        else {
            res.json({ 'status': true });
        }
    });
};

exports.removeArtist = function (req, res) {
    db.removeArtist(req.params.id, function (error, artist) {
        if (error) {
            res.json({ 'status': false });
        } else {
            res.json({ 'status': true });
        }
    });
};

exports.allArtist = function(req, res){
    db.allArtist(function(artists){
        res.json(artists);
    });
};

exports.findById = function(req, res){
    db.findById(req.params.id, function(artist){
        res.json(artist);
    });
};

exports.searchArtists = function(req, res){
    db.searchArtists(req.body, function(error, artists){
        if (err) {
            res.json({'status': false});
        } 
        else {
            res.json(artists);
        }
    });
};

exports.topArtist = function(req, res){
    db.topArtist(function(artists){
        res.json(artists);
    });
};
