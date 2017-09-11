import { Component, Inject, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'song-delete',
    templateUrl: './../Views/songDeleteDialog.component.html',
    styleUrls: ['./../CSS/song.component.css']

})

export class SongDeleteDialogComponent {
    constructor(public dialogRef: MdDialogRef<SongDeleteDialogComponent>,
        @Inject(MD_DIALOG_DATA) public data: any) { }
    onYesClick(): void {
    }
}