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
var artist_service_1 = require("./artist.service");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = require("graphql-tag");
exports.topSongs = (_a = ["\nquery topSongs{\nsongQueries {\n    topSongs {\n        id\n           name\n        artist {\n          id\n          firstName\n          lastName\n        }\n        album\n        publisher\n        publicationYear\n        genere\n        views\n        words\n      }\n    }\n  }\n"], _a.raw = ["\nquery topSongs{\nsongQueries {\n    topSongs {\n        id\n           name\n        artist {\n          id\n          firstName\n          lastName\n        }\n        album\n        publisher\n        publicationYear\n        genere\n        views\n        words\n      }\n    }\n  }\n"], graphql_tag_1.default(_a));
exports.allSongs = (_b = ["\nquery allSongs{\n    songQueries {\n      allSongs {\n        id\n           name\n        artist {\n          id\n          firstName\n          lastName\n        }\n        album\n        publisher\n        publicationYear\n        genere\n        views\n        words\n      }\n    }\n  }\n"], _b.raw = ["\nquery allSongs{\n    songQueries {\n      allSongs {\n        id\n           name\n        artist {\n          id\n          firstName\n          lastName\n        }\n        album\n        publisher\n        publicationYear\n        genere\n        views\n        words\n      }\n    }\n  }\n"], graphql_tag_1.default(_b));
var SongService = /** @class */ (function () {
    function SongService(apollo) {
        this.apollo = apollo;
    }
    SongService.prototype.getSongs = function () {
        return this.apollo.watchQuery({
            query: exports.allSongs
        });
    };
    SongService.prototype.getTopSongs = function () {
        return this.apollo.watchQuery({
            query: exports.topSongs
        });
    };
    SongService.prototype.removeSong = function (id) {
        var removeSong = (_a = ["\n        mutation removeSong($songId:ID!){\n            songMutations {\n              removeSong(id: $songId) {\n                id\n              }\n            }\n          }\n        "], _a.raw = ["\n        mutation removeSong($songId:ID!){\n            songMutations {\n              removeSong(id: $songId) {\n                id\n              }\n            }\n          }\n        "], graphql_tag_1.default(_a));
        return this.apollo.mutate({
            mutation: removeSong,
            variables: {
                songId: id
            },
            refetchQueries: [{
                    query: exports.topSongs
                }],
            updateQueries: {
                allSongs: function (prev, _a) {
                    var mutationResult = _a.mutationResult;
                    if (!mutationResult.data) {
                        return prev;
                    }
                    return Object.assign({}, prev, {
                        songQueries: {
                            allSongs: prev.songQueries.allSongs.filter(function (song) { return song.id !== mutationResult.data.songMutations.removeSong.id; })
                        },
                    });
                },
            },
        });
        var _a;
    };
    SongService.prototype.createSong = function (song) {
        var input = Object.assign({}, song, {
            artist: song.artist.id
        });
        var createSong = (_a = ["\n        mutation createSong($input: SongInput) {\n            songMutations {\n              createSong(input: $input) {\n                id\n                name\n                artist {\n                  id\n                }\n                album\n                publisher\n                publicationYear\n                genere\n                views\n                words\n                \n              }\n            }\n          }\n        "], _a.raw = ["\n        mutation createSong($input: SongInput) {\n            songMutations {\n              createSong(input: $input) {\n                id\n                name\n                artist {\n                  id\n                }\n                album\n                publisher\n                publicationYear\n                genere\n                views\n                words\n                \n              }\n            }\n          }\n        "], graphql_tag_1.default(_a));
        return this.apollo.mutate({
            mutation: createSong,
            variables: {
                input: input
            },
            updateQueries: {
                allSongs: function (prev, _a) {
                    var mutationResult = _a.mutationResult;
                    if (!mutationResult.data) {
                        return prev;
                    }
                    return Object.assign({}, prev, {
                        songQueries: {
                            allSongs: prev.songQueries.allSongs.concat([mutationResult.data.songMutations.createSong])
                        },
                    });
                },
            },
        });
        var _a;
    };
    SongService.prototype.updateSong = function (song) {
        var input = Object.assign({}, song, {
            artist: song.artist.id
        });
        delete input.id;
        delete input['__typename'];
        var updateSong = (_a = ["\n        mutation updateSong($songId:ID!, $input: SongInput) {\n            songMutations {\n              updateSong(id: $songId,input: $input) {\n                id\n                name\n                artist {\n                  id\n                }\n                album\n                publisher\n                publicationYear\n                genere\n                views\n                words\n                \n              }\n            }\n          }\n        "], _a.raw = ["\n        mutation updateSong($songId:ID!, $input: SongInput) {\n            songMutations {\n              updateSong(id: $songId,input: $input) {\n                id\n                name\n                artist {\n                  id\n                }\n                album\n                publisher\n                publicationYear\n                genere\n                views\n                words\n                \n              }\n            }\n          }\n        "], graphql_tag_1.default(_a));
        return this.apollo.mutate({
            mutation: updateSong,
            variables: {
                songId: song.id,
                input: input
            },
            refetchQueries: [{
                    query: exports.topSongs
                }, {
                    query: artist_service_1.topArtists
                }]
        });
        var _a;
    };
    SongService.prototype.songViewed = function (song) {
        var songViewed = (_a = ["\n        mutation songViewed($songId:ID!) {\n            songMutations {\n              songViewed(id: $songId){\n                id\n                name\n                artist {\n                  id\n                }\n                album\n                publisher\n                publicationYear\n                genere\n                views\n                words\n              }\n            }\n          }\n        "], _a.raw = ["\n        mutation songViewed($songId:ID!) {\n            songMutations {\n              songViewed(id: $songId){\n                id\n                name\n                artist {\n                  id\n                }\n                album\n                publisher\n                publicationYear\n                genere\n                views\n                words\n              }\n            }\n          }\n        "], graphql_tag_1.default(_a));
        return this.apollo.mutate({
            mutation: songViewed,
            variables: {
                songId: song.id,
            },
            refetchQueries: [{
                    query: exports.topSongs
                }, {
                    query: artist_service_1.topArtists
                }]
        });
        var _a;
    };
    SongService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], SongService);
    return SongService;
}());
exports.SongService = SongService;
var _a, _b;
//# sourceMappingURL=song.service.js.map