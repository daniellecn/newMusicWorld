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
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var song_service_1 = require("./../Services/song.service");
var material_2 = require("@angular/material");
var SongDeleteDialogComponent = /** @class */ (function () {
    function SongDeleteDialogComponent(dialogRef, data, songService, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.songService = songService;
        this.snackBar = snackBar;
        this.selectedSong = data.song;
    }
    SongDeleteDialogComponent.prototype.onYesClick = function (song) {
        var _this = this;
        this.songService.removeSong(song.id.toString())
            .subscribe(function (_a) {
            var data = _a.data;
            _this.snackBar.open(song.name + " successfully deleted", 'Created', {
                duration: 2000
            });
        }, function (error) {
            _this.snackBar.open("There was an error deleting the song", 'Created', {
                duration: 2000
            });
        });
    };
    SongDeleteDialogComponent = __decorate([
        core_1.Component({
            selector: 'song-delete',
            templateUrl: './../Views/songDeleteDialog.component.html',
            styleUrls: ['./../CSS/song.component.css']
        }),
        __param(1, core_1.Inject(material_1.MD_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MdDialogRef, Object, song_service_1.SongService,
            material_2.MdSnackBar])
    ], SongDeleteDialogComponent);
    return SongDeleteDialogComponent;
}());
exports.SongDeleteDialogComponent = SongDeleteDialogComponent;
//# sourceMappingURL=songDeleteDialog.component.js.map