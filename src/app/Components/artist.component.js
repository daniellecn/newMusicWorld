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
var artist_1 = require("./../Modules/artist");
var artist_service_1 = require("./../Services/artist.service");
var user_service_1 = require("./../Services/user.service");
var artistDetailDialog_component_1 = require("./../Components/artistDetailDialog.component");
var artistAddEditDialog_component_1 = require("./../Components/artistAddEditDialog.component");
var artistDeleteDialog_component_1 = require("./artistDeleteDialog.component");
var ArtistComponent = /** @class */ (function () {
    function ArtistComponent(artistService, userService, router, dialog) {
        this.artistService = artistService;
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.showTable = false;
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.artistSearch = new artist_1.Artist();
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    _this.latitude = position.coords.latitude;
                    _this.longitude = position.coords.longitude;
                    _this.zoom = 12;
                });
            }
        }
        this.artists = new Array();
        this.searchArtist(this.artistSearch);
        this.userService.connectedUser().subscribe(function (_a) {
            var data = _a.data;
            _this.user = data.userQueries.me;
        });
    };
    ArtistComponent.prototype.searchArtist = function (artistSearch) {
        var _this = this;
        this.showTable = true;
        this.artistService.searchArtists(artistSearch.firstName, artistSearch.lastName, artistSearch.country)
            .subscribe(function (_a) {
            var data = _a.data;
            _this.artists = data.artistQueries.search;
        });
    };
    ArtistComponent.prototype.artistDetailDialog = function (artist) {
        var dialogRef = this.dialog.open(artistDetailDialog_component_1.ArtistDetailDialogComponent, {
            height: '500px',
            data: { selectedArtist: artist },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    ArtistComponent.prototype.artistDeleteDialog = function (artist) {
        var _this = this;
        var dialogRef = this.dialog.open(artistDeleteDialog_component_1.ArtistDeleteDialogComponent, {
            height: '500px',
            data: { artist: artist },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.searchArtist(_this.artistSearch);
        });
    };
    ArtistComponent.prototype.artistEditDialog = function (artist) {
        var _this = this;
        var isCreate = false;
        if (artist == null) {
            this.selectedArtist = new artist_1.Artist();
            isCreate = true;
        }
        else {
            // data returned from graphql is readonly
            this.selectedArtist = Object.assign({}, artist);
        }
        var dialogRef = this.dialog.open(artistAddEditDialog_component_1.ArtistAddEditDialogComponent, {
            height: '650px',
            width: '750px',
            data: {
                selectedSong: this.selectedArtist,
                isCreate: isCreate
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.searchArtist(_this.artistSearch);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", artist_1.Artist)
    ], ArtistComponent.prototype, "artistSearch", void 0);
    ArtistComponent = __decorate([
        core_1.Component({
            selector: 'artist',
            templateUrl: './../Views/artist.component.html',
            styles: ["\n        .form-inline {\n            margin-top: auto;\n            margin-bottom: 10px;\n        }\n        .form-group {\n            padding-top: 0 !important;\n            padding-bottom: 0 !important;\n        }\n        .form-group>input{\n            min-width: 100px;\n        }\n        #google-map {\n            width: auto;\n            height: 500px;\n        }\n    "],
            styleUrls: ['./../CSS/song.component.css']
        }),
        __metadata("design:paramtypes", [artist_service_1.ArtistService,
            user_service_1.UserService,
            router_1.Router,
            material_1.MdDialog])
    ], ArtistComponent);
    return ArtistComponent;
}());
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=artist.component.js.map