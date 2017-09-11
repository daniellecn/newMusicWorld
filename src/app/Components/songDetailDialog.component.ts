import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

import { Song } from './../Modules/song';
import { Artist } from './../Modules/artist';
import { SongService } from './../Services/song.service'

@Component({
  selector: 'song-Dialog',
  templateUrl: './../Views/songDetailDialog.component.html',
  styleUrls: ['./../CSS/song.component.css'],
})
export class SongDetailDialogComponent implements OnInit { 
    title: string;
    song: Song;

    constructor(@Inject(MD_DIALOG_DATA) public data: any) {
        this.song = data.selectedSong;
     }

    ngOnInit(): void{
        this.title = 'Detail';
    }

    cancel(): void{
    }
}