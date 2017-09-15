var db = require('../../Database');

exports.createSong = function (req, res) {
    db.createSong(req.body, function (error, song) {
        if (error) {
            res.json(error);
        }
        else {
            res.json();
        }
    });
};

exports.updateSong = function (req, res) {
    db.updateSong(req.params.id, req.body, function (error) {
        if (error) {
            res.json({ 'status': false });
        } else {
            res.json({ 'status': true });
        }
    });
};

exports.removeSong = function (req, res) {
    db.removeSong(req.params.id, function (error) {
        if (error) {
            res.json({ 'status': false });
        } else {
            res.json({ 'status': true });
        }
    });
};

exports.songViewed = function (req, res) {
    db.songViewed(req.params.id, function (error) {
        if (error) {
            res.json({ 'status': false });
        } else {
            res.json({ 'status': true });
        }
    });
};

exports.topSongs = function(req, res){
    db.topSongs(function(songs){
        res.json(songs);
    });
};

exports.allSongs = function(req, res){
    db.allSongs(function(songs){
        res.json(songs);
    });
};

exports.searchSongs = function(req, res){
    db.searchSongs(req.body, function(songs){
        res.json(songs);
    })
}