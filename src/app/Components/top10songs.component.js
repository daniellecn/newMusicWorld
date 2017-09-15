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
var d3 = require("d3-selection");
var d3Scale = require("d3-scale");
var d3Shape = require("d3-shape");
var song_service_1 = require("./../Services/song.service");
var Top10SongsComponent = /** @class */ (function () {
    function Top10SongsComponent(songService) {
        this.songService = songService;
        this.width = 500;
        this.height = 500;
        this.radius = Math.min(this.width, this.height) / 2;
        this.songs = new Array();
        this.getSongs();
    }
    Top10SongsComponent.prototype.ngOnInit = function () {
        this.initSvg();
    };
    Top10SongsComponent.prototype.getSongs = function () {
        var _this = this;
        this.songService.getTopSongs().subscribe(function (_a) {
            var data = _a.data;
            _this.songs = data.songQueries.topSongs;
            _this.drawPie();
        });
    };
    Top10SongsComponent.prototype.initSvg = function () {
        this.color = d3Scale.scaleOrdinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
        this.arc = d3Shape.arc()
            .outerRadius(this.radius - 10)
            .innerRadius(0);
        this.labelArc = d3Shape.arc()
            .outerRadius(this.radius - 40)
            .innerRadius(this.radius - 40);
        this.pie = d3Shape.pie()
            .sort(null)
            .value(function (d) { return d.views; });
        this.svg = d3.select("svg")
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
        ;
    };
    Top10SongsComponent.prototype.drawPie = function () {
        var _this = this;
        var g = this.svg.selectAll(".arc")
            .data(this.pie(this.songs))
            .enter().append("g")
            .attr("class", "arc");
        g.append("path").attr("d", this.arc)
            .style("fill", function (d) { return _this.color(d.data.id); });
        g.append("text").attr("transform", function (d) { return "translate(" + _this.labelArc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .text(function (d) {
            return d.data.name;
        });
    };
    Top10SongsComponent = __decorate([
        core_1.Component({
            selector: 'top10songs',
            templateUrl: './../Views/top10songs.component.html'
            //   styleUrls: ['./CSS/login.component.css'],
        }),
        __metadata("design:paramtypes", [song_service_1.SongService])
    ], Top10SongsComponent);
    return Top10SongsComponent;
}());
exports.Top10SongsComponent = Top10SongsComponent;
//# sourceMappingURL=top10songs.component.js.map