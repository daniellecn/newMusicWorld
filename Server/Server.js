var express = require('express'),
    DB = require('./DB'),
    http = require('http'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    socketio = require('socket.io'),
    app = express();

app.use(bodyParser());
app.use(express.static(__dirname + '/../'));

// ===== Connection string for DB =====
var conn = 'mongodb://localhost/musicWorld';
var db;
db = new DB.startup(conn);


//===== routes =====
require('./routes/routes.js')(app);

var io = socketio.listen(app.listen(3000, function () {
    console.log("MusicWorld Express server listening on port %d in %s mode",
        this.address().port,
        app.settings.env);
}));

require('./routes/socketio.js')(io);


