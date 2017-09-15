var user = require('../models/user'),
    artist = require('../models/artist'),
    song = require('../models/song'),
    db = require('../Database'),
    mongoose = require('mongoose'),
    userApi = require('../routes/API/userAPI'),
    artistApi = require('../routes/API/artistAPI'),
    songApi = require('../routes/API/songAPI');

module.exports = function(app) {
    app.post('/API/userAPI', userApi.addUser);
    app.get('/API/userAPI', userApi.verifyUser);

    app.post('/API/artistAPI', artistApi.createArtist);
    app.post('/API/artistAPI', artistApi.updateArtist);
    app.post('/API/artistAPI', artistApi.removeArtist);
    app.get('/API/artistAPI', artistApi.allArtist);
    app.get('/API/artistAPI', artistApi.findById);
    app.get('/API/artistAPI', artistApi.searchArtists);
    app.get('/API/artistAPI', artistApi.topArtist);

    app.post('/API/songAPI', songApi.createSong);
    app.post('/API/songAPI', songApi.updateSong);
    app.post('/API/songAPI', songApi.removeSong);
    app.post('/API/songAPI', songApi.songViewed);
    app.get('/API/songAPI', songApi.topSongs);
    app.get('/API/songAPI', songApi.allSongs);
    app.get('/API/songAPI', songApi.searchSongs);
}