import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";

import { Song } from './../Modules/song';
import { SongService } from './../Services/song.service'

@Component({
    selector: 'top10songs',
    templateUrl: './../Views/top10songs.component.html'
    //   styleUrls: ['./CSS/login.component.css'],
})
export class Top10SongsComponent implements OnInit {
    private width: number;
    private height: number;
    private radius: number;

    private arc: any;
    private labelArc: any;
    private pie: any;
    private color: any;
    private svg: any;

    ngOnInit(): void {
        this.initSvg();
    }
    songs: Array<Song>;

    constructor(private songService: SongService) {
        this.width = 500;
        this.height = 500;
        this.radius = Math.min(this.width, this.height) / 2;
        this.songs = new Array<Song>();
        this.getSongs();
    }

    getSongs(): void {
        this.songService.getTopSongs().subscribe(({ data }) => {
            this.songs = data.songQueries.topSongs;
            this.drawPie();
        });
    }

    private initSvg() {
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
            .value((d: any) => d.views);
        this.svg = d3.select("svg")
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");;
    }

    private drawPie() {
        let g = this.svg.selectAll(".arc")
            .data(this.pie(this.songs))
            .enter().append("g")
            .attr("class", "arc");
        g.append("path").attr("d", this.arc)
            .style("fill", (d: { data: Song }) => this.color(d.data.id));
        g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
            .attr("dy", ".35em")
            .text((d: { data: Song }) => {
                return d.data.name;
            });
    }
}