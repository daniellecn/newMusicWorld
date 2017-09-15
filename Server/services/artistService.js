var Artist = require('../models/artist');
var Song = require('../models/song');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = {

    createArtist: function (req_body, callback) {
        var artist = new Artist();

        var objectId = new ObjectID();
        artist.id = objectId.toHexString();
        artist.firstName = req_body.firstName;
        artist.lastName = req_body.lastName;
        artist.country = req_body.country;
        artist.long = req_body.long;
        artist.lat = req_body.lat;

        artist.save(function (error, artist) {
            if (error) {
                console.log('add artist error: ' + error);
                return callback(error);
            }
            callback(null, artist);
        });
    },

    updateArtist: function (id, req_body, callback) {
        Artist.findById(id, function (error, artist) {
            if (error) {
                console.log('update artist error: ' + error);
                return callback(error);
            }
            else {
                artist.firstName = req_body.firstName || artist.firstName;
                artist.lastName = req_body.lastName || artist.lastName;
                artist.country = req_body.country || artist.country;
                artist.long = req_body.long || artist.long;
                artist.lat = req_body.lat || artist.lat;

                artist.save(function (error) {
                    if (error) {
                        console.log('update artist error: ' + error);
                        return callback(error);
                    }
                    callback(null);
                });
            }
        });
    },

    removeArtist: function (id, callback) {
        Artist.findById(id, function (error, artist) {
            if (error) {
                console.log('remove artist error: ' + error);
                return callback(error);
            }
            else {
                artist.remove(function (error, artist) {
                    callback(error, artist);
                })
            }
        });
    },

    allArtist: function (callback) {
        Artist.find(function (error, artists) {
            if (error) {
                return console.error(error);
            }
            callback(artists);
        });
    },

    findById: function (id, callback) {
        Artist.findById(id, function (error, artist) {
            if (error) {
                return console.error(error);
            }
            callback(artist);
        });
    },

    searchArtists: function (params, callback) {
        var filter = {};

        if (params.firstName && params.firstName !== "") {
            filter['firstName'] = params.firstName;
        }

        if (params.lastName && params.lastName !== "") {
            filter['lastName'] = params.lastName;
        }

        if (params.country && params.country !== "") {
            filter['country'] = params.country;
        }

        Artist.find(filter, function (error, artista) {
            callback(null, artists);
        });
    },

    topArtist: function (callback) {
        Song.aggregate([
            {
                $group: {
                    _id: { artist: '$artist' },
                    totalViews: { $sum: '$views' },
                },
            },
            {
                $sort: {
                    totalViews: -1,
                },
            },
            { $limit: 10 },
        ]).exec(function(error, results){
            if(error){
                return console.error(error);
            }
            Artist.populate(results, {path: '_id'}, function(error, topArtist){
                callback(topArtist);
            })
        });
    }
}