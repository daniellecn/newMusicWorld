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
var song_service_1 = require("./song.service");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = require("graphql-tag");
exports.topArtists = (_a = ["\nquery topArtists{\n    artistQueries {\n      topArtists {\n        id\n        firstName\n        lastName\n        country\n        long\n        lat\n        views\n      }\n    }\n  }\n"], _a.raw = ["\nquery topArtists{\n    artistQueries {\n      topArtists {\n        id\n        firstName\n        lastName\n        country\n        long\n        lat\n        views\n      }\n    }\n  }\n"], graphql_tag_1.default(_a));
exports.searchArtists = (_b = ["\nquery searchArtists($firstName:String, $lastName:String, $country:String) {\n    artistQueries {\n      search(firstName:$firstName, lastName:$lastName, country:$country) {\n        id\n        firstName\n        lastName\n        country\n        long\n        lat\n        views\n      }\n    }\n  }\n"], _b.raw = ["\nquery searchArtists($firstName:String, $lastName:String, $country:String) {\n    artistQueries {\n      search(firstName:$firstName, lastName:$lastName, country:$country) {\n        id\n        firstName\n        lastName\n        country\n        long\n        lat\n        views\n      }\n    }\n  }\n"], graphql_tag_1.default(_b));
var searchVariables = {};
var ArtistService = /** @class */ (function () {
    function ArtistService(apollo) {
        this.apollo = apollo;
    }
    ArtistService.prototype.searchArtists = function (firstName, lastName, country) {
        searchVariables = {
            firstName: firstName,
            lastName: lastName,
            country: country
        };
        return this.apollo.watchQuery({
            fetchPolicy: "network-only",
            query: exports.searchArtists,
            variables: {
                firstName: firstName,
                lastName: lastName,
                country: country
            }
        });
    };
    ArtistService.prototype.getTopArtists = function () {
        return this.apollo.watchQuery({
            query: exports.topArtists
        });
    };
    ArtistService.prototype.getAllArtists = function () {
        var allArtists = (_a = ["\n        query allArtists{\n        artistQueries {\n            allArtists {\n                id\n                firstName\n                lastName\n                country\n                long\n                lat\n                views\n              }\n            }\n          }\n        "], _a.raw = ["\n        query allArtists{\n        artistQueries {\n            allArtists {\n                id\n                firstName\n                lastName\n                country\n                long\n                lat\n                views\n              }\n            }\n          }\n        "], graphql_tag_1.default(_a));
        return this.apollo.watchQuery({
            query: allArtists
        });
        var _a;
    };
    ArtistService.prototype.createArtist = function (artist) {
        var createArtist = (_a = ["\n        mutation createArtist($input:ArtistInput!) {\n            artistMutations {\n              createArtist(input: $input) {\n                id\n                firstName\n                lastName\n                country\n                long\n                lat\n              }\n            }\n          }\n        "], _a.raw = ["\n        mutation createArtist($input:ArtistInput!) {\n            artistMutations {\n              createArtist(input: $input) {\n                id\n                firstName\n                lastName\n                country\n                long\n                lat\n              }\n            }\n          }\n        "], graphql_tag_1.default(_a));
        return this.apollo.mutate({
            mutation: createArtist,
            variables: {
                input: artist
            }
        });
        var _a;
    };
    ArtistService.prototype.updateArtist = function (artist) {
        var updateArtist = (_a = ["\n        mutation updateArtist($id: ID!, $input:ArtistInput!) {\n            artistMutations {\n              updateArtist(id: $id, input: $input) {\n                id\n                firstName\n                lastName\n                country\n                long\n                lat\n              }\n            }\n          }\n        "], _a.raw = ["\n        mutation updateArtist($id: ID!, $input:ArtistInput!) {\n            artistMutations {\n              updateArtist(id: $id, input: $input) {\n                id\n                firstName\n                lastName\n                country\n                long\n                lat\n              }\n            }\n          }\n        "], graphql_tag_1.default(_a));
        var input = Object.assign({}, artist);
        delete input.id;
        delete input.views;
        delete input['__typename'];
        return this.apollo.mutate({
            mutation: updateArtist,
            variables: {
                id: artist.id,
                input: input
            }
        });
        var _a;
    };
    ArtistService.prototype.removeArtist = function (artist) {
        var removeArtist = (_a = ["\n        mutation removeArtist($id: ID!) {\n            artistMutations {\n              removeArtist(id: $id) {\n                id\n                firstName\n                lastName\n                country\n                long\n                lat\n              }\n            }\n          }\n        "], _a.raw = ["\n        mutation removeArtist($id: ID!) {\n            artistMutations {\n              removeArtist(id: $id) {\n                id\n                firstName\n                lastName\n                country\n                long\n                lat\n              }\n            }\n          }\n        "], graphql_tag_1.default(_a));
        return this.apollo.mutate({
            mutation: removeArtist,
            variables: {
                id: artist.id,
            },
            refetchQueries: [{
                    query: exports.topArtists
                }, {
                    query: song_service_1.topSongs
                }, {
                    query: song_service_1.allSongs
                }]
        });
        var _a;
    };
    ArtistService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], ArtistService);
    return ArtistService;
}());
exports.ArtistService = ArtistService;
var _a, _b;
//# sourceMappingURL=artist.service.js.map