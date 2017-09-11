import { Component, Inject, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Song } from './../Modules/song';
import { SongService } from './../Services/song.service';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'song-delete',
    templateUrl: './../Views/songDeleteDialog.component.html',
    styleUrls: ['./../CSS/song.component.css']

})

export class SongDeleteDialogComponent {
    selectedSong: Song;
    constructor(public dialogRef: MdDialogRef<SongDeleteDialogComponent>,
        @Inject(MD_DIALOG_DATA) public data: any,
        private songService: SongService,
        private snackBar: MdSnackBar) { 
            this.selectedSong = data.song;
        }
    onYesClick(song: Song): void {
        this.songService.removeSong(song.id.toString())
            .subscribe(({ data }) => {
            this.snackBar.open(`${song.name} successfully deleted`, 'Created', {
            duration: 2000
          });
      }, (error) => {
            this.snackBar.open(`There was an error deleting the song`, 'Created', {
            duration: 2000
          });
      });
    }
}