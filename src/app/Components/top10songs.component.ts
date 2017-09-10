import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Song } from './../Modules/song';
import { SongService } from './../Services/song.service'

@Component({
  selector: 'top10songs',
  templateUrl: './../Views/top10songs.component.html'
//   styleUrls: ['./CSS/login.component.css'],
})
export class Top10SongsComponent { 
    songs: Array<Song>;

    constructor(private songService: SongService) { 
        this.songs = new Array<Song>();
        this.getSongs();
    }
    
    getSongs(): void {
        this.songService.getTopSongs().subscribe(({ data }) => {
            this.songs = data.songQueries.topSongs;
        });
    }
}