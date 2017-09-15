"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var songs_component_1 = require("./Components/songs.component");
var login_component_1 = require("./Components/login.component");
var video_component_1 = require("./Components/video.component");
var register_component_1 = require("./Components/register.component");
var logout_component_1 = require("./Components/logout.component");
var artist_component_1 = require("./Components/artist.component");
// import { ArtistDetailDialogComponent } from './Components/artistDetailDialog.component';
var top10artists_component_1 = require("./Components/top10artists.component");
var top10songs_component_1 = require("./Components/top10songs.component");
var routes = [
    { path: '', redirectTo: '', pathMatch: 'full', component: video_component_1.VideoComponent },
    { path: 'allSongs', component: songs_component_1.SongsComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'artist', component: artist_component_1.ArtistComponent },
    // { path: 'artistDetail', component: ArtistDetailComponent},
    { path: 'top10artists', component: top10artists_component_1.Top10ArtistsComponent },
    { path: 'top10songs', component: top10songs_component_1.Top10SongsComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map