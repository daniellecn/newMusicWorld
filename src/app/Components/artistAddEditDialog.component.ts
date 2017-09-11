import { Component, Input, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { Artist } from './../Modules/artist';
import { ArtistService } from './../Services/artist.service';

@Component({
    selector: 'song-edit',
    templateUrl: './../Views/artistAddEditDialog.component.html',
    styleUrls: ['./../CSS/song.component.css']
})

export class ArtistAddEditDialogComponent {
    title: string;
    isCreate: boolean;
    selectedArtist: Artist;

        constructor(public dialogRef: MdDialogRef<ArtistAddEditDialogComponent>,
        @Inject(MD_DIALOG_DATA) public data: any,
        private artistService: ArtistService) {
        this.selectedArtist = data.selectedSong;
        this.isCreate = data.isCreate;
        this.title = this.isCreate ? 'ADD NEW ARTIST' : `EDIT ${this.selectedArtist.firstName} ${this.selectedArtist.lastName}`;
    }

    saveArtist(){
        if (this.isCreate)
            this.artistService.createArtist(this.selectedArtist).subscribe(({ data }) => {
                console.log('created new artist');
                this.dialogRef.close();
            })
        else
            this.artistService.updateArtist(this.selectedArtist).subscribe(({ data }) => {
                console.log('created new artist');
                this.dialogRef.close();
            })
    }
}