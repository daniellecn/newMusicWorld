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
var forms_1 = require("@angular/forms");
var artist_service_1 = require("./../Services/artist.service");
var SongEditDialogComponent = /** @class */ (function () {
    function SongEditDialogComponent(dialogRef, data, artistService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.artistService = artistService;
        this.artistControl = new forms_1.FormControl();
        this.selectedSong = data.selectedSong;
        this.title = data.title;
        artistService.getArtists().then(function (artists) { return _this.artistsOptions = artists; });
    }
    SongEditDialogComponent.prototype.onYesClick = function () {
    };
    SongEditDialogComponent.prototype.displayNames = function (artistOption) {
        return artistOption ? (artistOption.firstName && ' ' && artistOption.lastName) : artistOption.firstName;
    };
    SongEditDialogComponent = __decorate([
        core_1.Component({
            selector: 'song-edit',
            templateUrl: './../Views/songAddEdit.component.html',
            styleUrls: ['./../CSS/song.component.css']
        }),
        __param(1, core_1.Inject(material_1.MD_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MdDialogRef, Object, artist_service_1.ArtistService])
    ], SongEditDialogComponent);
    return SongEditDialogComponent;
}());
exports.SongEditDialogComponent = SongEditDialogComponent;
//# sourceMappingURL=songEditDialog.component.js.map