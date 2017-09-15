var Artist = require('../models/artist');
var Song = require('../models/song');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = {
    createSong: function (req_body, callbak) {
        var song = new Song();

        var objectId = new ObjectID();
        song.id = objectId.toHexString();
        song.name = req_body.name;
        song.artist = req_body.artist.id;
        song.album = req_body.album;
        song.publisher = req_body.publisher;
        song.publicationYear = req_body.publicationYear;
        song.genere = req_body.genere;
        song.words = req_body.words;


        song.save(function (error, song) {
            if (error) {
                console.log('add song error: ' + error);
                return callback(error);
            }
            callback(null, song);
        });
    },

    updateSong: function (id, req_body, callback) {
        Song.findById(id, function (error, song) {
            if (error) {
                console.log('update song error: ' + error);
                return callback(error);
            }
            else {
                song.name = req_body.name || song.firstName;
                song.artist = req_body.artist.id || song.artist;
                song.album = req_body.album || song.album;
                song.publisher = req_body.publisher || song.publisher;
                song.publicationYear = req_body.publicationYear || song.publicationYear;
                song.genere = req_body.genere || song.genere;
                song.words = req_body.words || song.words;

                song.save(function (error) {
                    if (error) {
                        console.log('update song error: ' + error);
                        return callback(error);
                    }
                    callback(null);
                });
            }
        });
    },

    removeSong: function (id, callback) {
        Song.findById(id, function (error, song) {
            if (error) {
                console.log('remove song error: ' + error);
                return callback(error);
            }
            else {
                song.remove(function (error, song) {
                    callback(error, song);
                })
            }
        });
    },

    songViewed: function (id, callback) {
        Song.findById(id).then(song => {
            song.views += 1;
            return song.save().then(() => song);
        })
    },

    topSongs: function (callback) {
        Song.find().sort('-views'.limit(10)).exec(function (error, results) {
            Artist.populate(results, { path: 'artist' }, function (error, topSongs) {
                callback(topSongs);
            })
        })
    },

    allSongs: function (callback) {
        Song.find().exec(function (error, results) {
            Artist.populate(results, { path: 'artist' }, function (error, allSongs) {
                callback(allSongs);
            })
        })
    },

    searchSongs: function (req_body, callback) {
        var filter = {};

        if (req_body.name && req_body.name !== "") {
            filter['name'] = req_body.name;
        }

        if (req_body.album && req_body.album !== "") {
            filter['album'] = req_body.album;
        }

        if (req_body.publicationYear && req_body.publicationYear !== "") {
            filter['publicationYear'] = req_body.publicationYear;
        }

        Song.find(filter).populate('artist').exec(function (err, songs) {
            callback(null, songs);
        });
    }
}