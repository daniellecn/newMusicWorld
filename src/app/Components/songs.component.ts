import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Song } from './../Modules/song';
import { Artist } from './../Modules/artist';
import { User } from './../Modules/user';
import { SongService } from './../Services/song.service';
import { UserService } from './../Services/user.service';
import { SongDialogComponent } from './../Components/songDialog.component';

interface QueryResponse {
    userQueries: { me?: User };
}

@Component({
    selector: 'songs',
    templateUrl: './../Views/songs.component.html'
    //   styleUrls: ['./CSS/login.component.css'],
})

export class SongsComponent implements OnInit {
    songs: Array<Song>;
    action: string;
    private user: User;

    constructor(private songsService: SongService,
        private userService: UserService,
        private router: ActivatedRoute,
        public dialog: MdDialog) {
        this.songs = new Array<Song>();
        this.getSongs();
    }

    ngOnInit(): void {
        // this.router.params.switchMap((params: ParamMap)=> params.get('action')).
        // subscribe(action => this.action = action);
        // this.router.params.switchMap((params: ParamMap)=> params.get["action"]).
        // subscribe(action => this.action = action.toString());
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
        // alert(this.action.toString());
        const dialogRef = this.dialog.open(SongDialogComponent, {
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
}

@Component({
    selector: 'song-delete',
    template: `
    <h2 md-dialog-title>Delete</h2>
    <md-dialog-content>Are you sure?</md-dialog-content>
    <md-dialog-actions>
        <button md-button md-dialog-close (click)="onNoClick()">No</button>
        <button md-button md-dialog-close="true" (click)="onYesClick()">Yes</button>
    </md-dialog-actions>
  `
    //   styleUrls: ['./CSS/login.component.css'],
})

export class SongDeleteDialogComponent {
    constructor(public dialogRef: MdDialogRef<SongDeleteDialogComponent>, private songService: SongService,
        @Inject(MD_DIALOG_DATA) public data: any) { }
    
    onYesClick(): void {
        console.log('calling delete on ' + this.data.song.id);
        this.songService.removeSong(this.data.song.id)
            .subscribe(({ data }) => {
                console.log('song deleted');
            })
    }
}