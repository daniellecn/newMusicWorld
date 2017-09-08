import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MdDialog} from '@angular/material';

import { Song } from './../Modules/song';
import { Artist } from './../Modules/artist';
import { SongService } from './../Services/song.service';
import { SongDialogComponent } from './../Components/songDialog.component';

@Component({
  selector: 'songs',
  templateUrl: './../Views/songs.component.html'
//   styleUrls: ['./CSS/login.component.css'],
})
export class SongsComponent { 
    songs: Array<Song>;
    
    constructor(private songsService: SongService,
                private router: Router,
                public dialog: MdDialog) { 
        this.songs = new Array<Song>();
        this.getSongs();
    }

    getSongs(): void {
        this.songsService.getSongs().then(function(songs: Array<Song>){
            this.songs = songs;
        }.bind(this));
    }

    songDetailDialog(song: Song): void{
        const dialogRef = this.dialog.open(SongDialogComponent, {
            height: '350px',
            data:{ selectedSong: song },
        });

        dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        });
    }
}