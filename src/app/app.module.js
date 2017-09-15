"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var flex_layout_1 = require("@angular/flex-layout");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var apollo_angular_1 = require("apollo-angular");
var apolloClient_1 = require("./apolloClient");
var app_routing_module_1 = require("./app-routing.module");
var material_2 = require("@angular/material");
var core_2 = require("@agm/core");
var user_service_1 = require("./Services/user.service");
var app_component_1 = require("./app.component");
var login_component_1 = require("./Components/login.component");
var logout_component_1 = require("./Components/logout.component");
var register_component_1 = require("./Components/register.component");
var video_component_1 = require("./Components/video.component");
var song_service_1 = require("./Services/song.service");
var songs_component_1 = require("./Components/songs.component");
var songAddEditDialog_component_1 = require("./Components/songAddEditDialog.component");
var songDeleteDialog_component_1 = require("./Components/songDeleteDialog.component");
var songDetailDialog_component_1 = require("./Components/songDetailDialog.component");
var top10songs_component_1 = require("./Components/top10songs.component");
var artist_service_1 = require("./Services/artist.service");
var artist_component_1 = require("./Components/artist.component");
// import { ArtistDetailDialogComponent } from './Components/artistDetailDialog.component';
var artistAddEditDialog_component_1 = require("./Components/artistAddEditDialog.component");
var artistDeleteDialog_component_1 = require("./Components/artistDeleteDialog.component");
var top10artists_component_1 = require("./Components/top10artists.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                video_component_1.VideoComponent,
                login_component_1.LoginComponent,
                logout_component_1.LogoutComponent,
                register_component_1.RegisterComponent,
                artist_component_1.ArtistComponent,
                // ArtistDetailDialogComponent,
                songs_component_1.SongsComponent,
                top10artists_component_1.Top10ArtistsComponent,
                top10songs_component_1.Top10SongsComponent,
                songDetailDialog_component_1.SongDetailDialogComponent,
                songDeleteDialog_component_1.SongDeleteDialogComponent,
                songAddEditDialog_component_1.SongAddEditDialogComponent,
                artistAddEditDialog_component_1.ArtistAddEditDialogComponent,
                artistDeleteDialog_component_1.ArtistDeleteDialogComponent
            ],
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                flex_layout_1.FlexLayoutModule,
                animations_1.BrowserAnimationsModule,
                material_1.MaterialModule,
                forms_1.ReactiveFormsModule,
                apollo_angular_1.ApolloModule.forRoot(apolloClient_1.createClient),
                core_2.AgmCoreModule.forRoot({
                    apiKey: "AIzaSyAVvxD7pbVARxYHsfOVXbNAZyXh4eXu_0o",
                    libraries: ["places"]
                })
            ],
            providers: [
                user_service_1.UserService,
                artist_service_1.ArtistService,
                song_service_1.SongService,
                { provide: material_2.MD_DIALOG_DATA, useValue: {} },
                { provide: material_2.MdDialogRef, useValue: {} }
            ],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [
                songDetailDialog_component_1.SongDetailDialogComponent,
                songDeleteDialog_component_1.SongDeleteDialogComponent,
                songAddEditDialog_component_1.SongAddEditDialogComponent,
                artistAddEditDialog_component_1.ArtistAddEditDialogComponent,
                artistDeleteDialog_component_1.ArtistDeleteDialogComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map