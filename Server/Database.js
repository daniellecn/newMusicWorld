/**
 * Created by adi on 30-Jul-16.
 */

var mongoose = require("mongoose"),
    UserService = require('./services/userService'),
    ArtistService = require('./services/artisrService'),
    SongService = require('./services/songService')


//connect to database
module.exports = {
    // initialize DB
    startup: function (dbUrl) {
        mongoose.connect(dbUrl);
        // Check connection to mongoDB
        mongoose.connection.on('open', function () {
            console.log('We have connected to mongodb');
        });
    },

    // disconnect from database
    closeDB: function () {
        mongoose.disconnect();
    },

    addUser     : UserService.addUser,
    verifyUser  : UserService.verifyUser,

    createArtist: ArtistService.createArtist,
    updateArtist: ArtistService.updateArtist,
    removeArtist: ArtistService.removeArtist,
    allArtist     : ArtistService.allArtist,
    findById    : ArtistService.findById,
    searchArtists: ArtistService.search,
    topArtist   : ArtistService.topArtist,

    createSong  : SongService.createSong,
    updateSong  : SongService.updateSong,
    removeSong  : SongService.removeSong,
    songViewed  : SongService.songViewed,
    topSongs    : SongService.topSongs,
    allSongs    : SongService.allSongs,
    searchSongs  : SongService.search
}
