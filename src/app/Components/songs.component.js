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
var artist_1 = require("./../Modules/artist");
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
        this.displayedSongs = new Array();
        this.songs = new Array();
        this.songSearch = new song_1.Song();
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
        var _this = this;
        this.songsService.getSongs()
            .subscribe(function (_a) {
            var data = _a.data;
            _this.songs = data.songQueries.allSongs;
            _this.refilter();
        });
    };
    SongsComponent.prototype.refilter = function () {
        var _this = this;
        this.displayedSongs = this.songs.filter(function (song) { return _this.filterSong(song); });
    };
    SongsComponent.prototype.filterSong = function (song) {
        if (!this.songSearch.album && !this.songSearch.name && !this.songSearch.genere)
            return true;
        else {
            var isRelevant = false;
            if (this.songSearch.name) {
                if (song.name)
                    isRelevant = song.name.startsWith(this.songSearch.name);
                else
                    return false;
            }
            if (this.songSearch.album) {
                if (song.album)
                    isRelevant = isRelevant || song.album.startsWith(this.songSearch.album);
                else
                    return false;
            }
            if (this.songSearch.genere) {
                if (song.genere)
                    isRelevant = isRelevant || song.genere.startsWith(this.songSearch.genere);
                else
                    return false;
            }
            return isRelevant;
        }
    };
    SongsComponent.prototype.songDetailDialog = function (song) {
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
            width: '250px',
            data: {
                song: song
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            //   alert(result);
        });
    };
    SongsComponent.prototype.songEditDialog = function (song) {
        var isCreate = false;
        if (song == null) {
            this.selectedSong = new song_1.Song();
            this.selectedSong.artist = new artist_1.Artist();
            isCreate = true;
        }
        else {
            this.selectedSong = Object.assign({}, song, {
                artist: Object.assign({}, song.artist)
            });
        }
        var dialogRef = this.dialog.open(songAddEditDialog_component_1.SongAddEditDialogComponent, {
            height: '500px',
            width: '750px',
            data: {
                selectedSong: this.selectedSong,
                isCreate: isCreate
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            //   alert(result);
        });
    };
    SongsComponent = __decorate([
        core_1.Component({
            selector: 'songs',
            templateUrl: './../Views/songs.component.html',
            styleUrls: ['./../CSS/song.component.css'],
            styles: ["\n        input {\n            min-width: 100px;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [song_service_1.SongService,
            user_service_1.UserService,
            router_1.ActivatedRoute,
            material_1.MdDialog])
    ], SongsComponent);
    return SongsComponent;
}());
exports.SongsComponent = SongsComponent;
//# sourceMappingURL=songs.component.js.map