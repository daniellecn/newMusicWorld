var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: {
        type: String, required: true, unique: true
    },
    userName: {
        type: String, required: true, unique: true
    },
    firstName: {
        type: String, required: false, trim: true
    },
    lastName: {
        type: String, required: false, trim: true
    },
    password: {
        type: String, required: true, unique: true
    }
});

exports.UserSchema = UserSchema;
module.exports = mongoose.model('User', UserSchema);