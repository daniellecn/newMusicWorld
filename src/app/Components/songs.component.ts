import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Song } from './../Modules/song';
import { Artist } from './../Modules/artist';
import { User } from './../Modules/user';
import { SongService } from './../Services/song.service';
import { UserService } from './../Services/user.service';
import { ArtistService } from './../Services/artist.service';
import { SongDetailDialogComponent } from './../Components/songDetailDialog.component';
import { SongAddEditDialogComponent } from './../Components/songAddEditDialog.component';
import { SongDeleteDialogComponent } from './../Components/songDeleteDialog.component';

interface QueryResponse {
    userQueries: { me?: User };
}

@Component({
    selector: 'songs',
    templateUrl: './../Views/songs.component.html',
    styleUrls: ['./../CSS/song.component.css']
})

export class SongsComponent implements OnInit {
    songs: Array<Song>;
    title: string;
    private user: User;
    selectedSong: Song;

    constructor(private songsService: SongService,
        private userService: UserService,
        private router: ActivatedRoute,
        public dialog: MdDialog) {
        this.songs = new Array<Song>();
        this.getSongs();
    }

    ngOnInit(): void {
        this.userService.connectedUser().subscribe(({ data }) => {
            this.user = data.userQueries.me;
        });
    }

    getSongs(): void {
        this.songsService.getSongs()
            .subscribe(({ data }) => {
                this.songs = data.songQueries.allSongs;
            })
    }

    songDetailDialog(song: Song): void {
        const dialogRef = this.dialog.open(SongDetailDialogComponent, {
            height: '500px',
            data: { selectedSong: song },
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    songDeleteDialog(song: Song): void {
        let dialogRef = this.dialog.open(SongDeleteDialogComponent, {
            width: '250px',
            data: {
                song
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //   alert(result);
        });
    }

    songEditDialog(song: Song): void {
       if (song == null){
           this.title = `ADD NEW SONG`
            this.selectedSong = new Song();
       }
       else{
           this.title = `EDIT `.concat(song.name);
            this.selectedSong = song;
       }

        let dialogRef = this.dialog.open(SongAddEditDialogComponent, {
            height: '500px',
            width: '750px',
            data: { selectedSong: this.selectedSong,
                    title: this.title }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //   alert(result);
        });
    }
}