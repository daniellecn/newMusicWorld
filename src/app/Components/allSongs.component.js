"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var song_1 = require("./../Modules/song");
var song_service_1 = require("./../Services/song.service");
var user_service_1 = require("./../Services/user.service");
var songDetailDialog_component_1 = require("./../Components/songDetailDialog.component");
var songAddEditDialog_component_1 = require("./../Components/songAddEditDialog.component");
var songDeleteDialog_component_1 = require("./../Components/songDeleteDialog.component");
var SongsComponent = /** @class */ (function () {
    function SongsComponent(songsService, userService, router, dialog) {
        this.songsService = songsService;
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.songs = new Array();
        this.getSongs();
    }
    SongsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.connectedUser().subscribe(function (_a) {
            var data = _a.data;
            _this.user = data.userQueries.me;
        });
    };
    SongsComponent.prototype.getSongs = function () {
        this.songsService.getSongs().then(function (songs) {
            this.songs = songs;
        }.bind(this));
    };
    SongsComponent.prototype.songDetailDialog = function (song) {
        // alert(this.action.toString());
        var dialogRef = this.dialog.open(songDetailDialog_component_1.SongDetailDialogComponent, {
            height: '500px',
            data: { selectedSong: song },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    SongsComponent.prototype.songDeleteDialog = function (song) {
        var dialogRef = this.dialog.open(songDeleteDialog_component_1.SongDeleteDialogComponent, {
            width: '250px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            //   alert(result);
        });
    };
    SongsComponent.prototype.songEditDialog = function (song) {
        if (song == null) {
            this.title = "ADD NEW SONG";
            this.selectedSong = new song_1.Song();
        }
        else {
            this.title = "EDIT ".concat(song.name);
            this.selectedSong = song;
        }
        var dialogRef = this.dialog.open(songAddEditDialog_component_1.SongAddEditDialogComponent, {
            height: '500px',
            width: '750px',
            data: { selectedSong: this.selectedSong,
                title: this.title }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            //   alert(result);
        });
    };
    SongsComponent = __decorate([
        core_1.Component({
            selector: 'songs',
            templateUrl: './../Views/allSongs.component.html',
            styleUrls: ['./../CSS/song.component.css']
        }),
        __metadata("design:paramtypes", [song_service_1.SongService,
            user_service_1.UserService,
            router_1.ActivatedRoute,
            material_1.MdDialog])
    ], SongsComponent);
    return SongsComponent;
}());
exports.SongsComponent = SongsComponent;
//# sourceMappingURL=allSongs.component.js.map