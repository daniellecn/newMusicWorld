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
var core_2 = require("@agm/core");
var ArtistAddEditDialogComponent = /** @class */ (function () {
    function ArtistAddEditDialogComponent(dialogRef, mapsAPILoader, ngZone, data, artistService) {
        this.dialogRef = dialogRef;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.data = data;
        this.artistService = artistService;
        this.selectedArtist = data.selectedSong;
        this.isCreate = data.isCreate;
        this.title = this.isCreate ? 'ADD NEW ARTIST' : "EDIT " + this.selectedArtist.firstName + " " + this.selectedArtist.lastName;
    }
    ArtistAddEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl = new forms_1.FormControl();
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.selectedArtist.lat = place.geometry.location.lat();
                    _this.selectedArtist.long = place.geometry.location.lng();
                    _this.latitude = _this.selectedArtist.lat;
                    _this.longitude = _this.selectedArtist.long;
                });
            });
        });
    };
    ArtistAddEditDialogComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if (this.selectedArtist.lat) {
            this.latitude = this.selectedArtist.lat;
            this.longitude = this.selectedArtist.long;
        }
        else if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    ArtistAddEditDialogComponent.prototype.saveArtist = function () {
        var _this = this;
        if (this.isCreate)
            this.artistService.createArtist(this.selectedArtist).subscribe(function (_a) {
                var data = _a.data;
                console.log('created new artist');
                _this.dialogRef.close();
            });
        else
            this.artistService.updateArtist(this.selectedArtist).subscribe(function (_a) {
                var data = _a.data;
                console.log('created new artist');
                _this.dialogRef.close();
            });
    };
    __decorate([
        core_1.ViewChild("search"),
        __metadata("design:type", core_1.ElementRef)
    ], ArtistAddEditDialogComponent.prototype, "searchElementRef", void 0);
    ArtistAddEditDialogComponent = __decorate([
        core_1.Component({
            selector: 'song-edit',
            templateUrl: './../Views/artistAddEditDialog.component.html',
            styleUrls: ['./../CSS/song.component.css'],
            styles: ["\n        #google-map-inEdit {\n            height: 300px;\n        }\n    "]
        }),
        __param(3, core_1.Inject(material_1.MD_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MdDialogRef, core_2.MapsAPILoader, core_1.NgZone, Object, artist_service_1.ArtistService])
    ], ArtistAddEditDialogComponent);
    return ArtistAddEditDialogComponent;
}());
exports.ArtistAddEditDialogComponent = ArtistAddEditDialogComponent;
//# sourceMappingURL=artistAddEditDialog.component.js.map