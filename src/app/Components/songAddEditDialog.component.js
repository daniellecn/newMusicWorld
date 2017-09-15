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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var song_service_1 = require("../Services/song.service");
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var artist_service_1 = require("./../Services/artist.service");
var SongAddEditDialogComponent = /** @class */ (function () {
    function SongAddEditDialogComponent(dialogRef, data, artistService, songService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.artistService = artistService;
        this.songService = songService;
        this.artistControl = new forms_1.FormControl();
        this.selectedSong = data.selectedSong;
        this.isCreate = data.isCreate;
        this.title = this.isCreate ? 'ADD NEW SONG' : "EDIT " + this.selectedSong.name;
        artistService.getAllArtists()
            .subscribe(function (_a) {
            var data = _a.data;
            _this.artistsOptions = data.artistQueries.allArtists;
        });
    }
    SongAddEditDialogComponent.prototype.save = function () {
        var _this = this;
        if (this.isCreate) {
            console.log('creating new song');
            this.songService.createSong(this.selectedSong)
                .subscribe(function (_a) {
                var data = _a.data;
                console.log('new song created - id ' + data.songMutations.createSong.id);
                _this.dialogRef.close();
            });
        }
        else {
            console.log('updating existing song');
            this.songService.updateSong(this.selectedSong)
                .subscribe(function (_a) {
                var data = _a.data;
                console.log('song updated - id ' + data.songMutations.updateSong.id);
                _this.dialogRef.close();
            });
        }
    };
    SongAddEditDialogComponent.prototype.displayNames = function (artistOption) {
        return artistOption ? (artistOption.firstName + ' ' + artistOption.lastName) : artistOption.firstName;
    };
    SongAddEditDialogComponent.prototype.saveSong = function (song) {
        if (this.title.localeCompare("ADD NEW SONG")) {
            this.songService.createSong(song);
        }
        else {
            this.songService.updateSong(song);
        }
    };
    SongAddEditDialogComponent = __decorate([
        core_1.Component({
            selector: 'song-edit',
            templateUrl: './../Views/songAddEditDialog.component.html',
            styleUrls: ['./../CSS/song.component.css']
        }),
        __param(1, core_1.Inject(material_1.MD_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MdDialogRef, Object, artist_service_1.ArtistService, song_service_1.SongService])
    ], SongAddEditDialogComponent);
    return SongAddEditDialogComponent;
}());
exports.SongAddEditDialogComponent = SongAddEditDialogComponent;
//# sourceMappingURL=songAddEditDialog.component.js.map