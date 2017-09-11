import { SongService } from '../Services/song.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'song-delete',
    templateUrl: './../Views/songDeleteDialog.component.html',
    styleUrls: ['./../CSS/song.component.css']

})

export class SongDeleteDialogComponent {
    constructor(public dialogRef: MdDialogRef<SongDeleteDialogComponent>, private songService: SongService,
        @Inject(MD_DIALOG_DATA) public data: any) { }
    onYesClick(): void {
        this.songService.removeSong(this.data.song.id)
        .subscribe(({ data }) => {
            console.log('song deleted');
        })
    }
}