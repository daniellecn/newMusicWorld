var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var ArtistSchema = new Schema({
    id: {
        type: Number, required: true, unique: true
    },
    firstName: {
        type: String, required: false, trim: true
    },
    lastName: {
        type: String, required: false, trim: true
    },
    country: {
        type: String, required: true
    },
    long: {
        type: Number, required: true
    },
    lat: {
        type: Number, required: true
    },
    views: {
        type: Number, required: false
    }
});

// If you delete an artist - delete all his songs
ArtistSchema.pre('remove', function(next) {
    Song.remove({artist: this._id}).exec();
    next();
});

exports.ArtistSchema = ArtistSchema;
module.exports = mongoose.model('Artist', ArtistSchema);