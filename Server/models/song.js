var mongoose = require('mongoose'),
    Schema = mongoose.Schemaת
    Artist = require("../models/artist");

var SongSchema = new Schema({
    id: {
        type: Number, required: true, unique: true
    },
    name: {
        type: String, required: true, trim: true
    },
    artist: {
        type: Schema.ObjectId, ref: 'Artist' , required: true
    },
    album: {
        type: String, required: false, trim:true
    },
    publisher: {
        type: String, required: false, trim:true
    },
    publicationYear: {
        type: Number, required: false
    },
    genere: {
        type: String, required: false, trim:true
    },
    views:{
        type: Number, required: false
    },
    words:{
        type: String, required: false
    }
});

exports.SongSchema = SongSchema;
module.exports = mongoose.model('Song', SongSchema);