import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {MdDialog} from '@angular/material';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Song } from './../Modules/song';
import { Artist } from './../Modules/artist';
import { SongService } from './../Services/song.service';
import { SongDialogComponent } from './../Components/songDialog.component';

@Component({
  selector: 'songs',
  templateUrl: './../Views/songs.component.html'
//   styleUrls: ['./CSS/login.component.css'],
})
export class SongsComponent implements OnInit{ 
    songs: Array<Song>;
    action: string;
    
    constructor(private songsService: SongService,
                private router: ActivatedRoute,
                public dialog: MdDialog) { 
        this.songs = new Array<Song>();
        this.getSongs();
    }

    ngOnInit(): void{
        // this.router.params.switchMap((params: ParamMap)=> params.get('action')).
        // subscribe(action => this.action = action);
        // this.router.params.switchMap((params: ParamMap)=> params.get["action"]).
        // subscribe(action => this.action = action.toString());
    }

    getSongs(): void {
        this.songsService.getSongs().then(function(songs: Array<Song>){
            this.songs = songs;
        }.bind(this));
    }

    songDetailDialog(song: Song): void{
        alert(this.action.toString());
        const dialogRef = this.dialog.open(SongDialogComponent, {
            height: '500px',
            data:{ selectedSong: song },
        });

        dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        });
    }
}