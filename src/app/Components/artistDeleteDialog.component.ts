import { Component, Inject, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Artist } from './../Modules/artist';
import { ArtistService } from './../Services/artist.service';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'artist-delete',
    templateUrl: './../Views/artistDeleteDialog.component.html',
    styleUrls: ['./../CSS/song.component.css']

})

export class ArtistDeleteDialogComponent {
    selectedArtist: Artist;
    constructor(public dialogRef: MdDialogRef<ArtistDeleteDialogComponent>,
        @Inject(MD_DIALOG_DATA) public data: any,
        private artistService: ArtistService,
        private snackBar: MdSnackBar) { 
            this.selectedArtist = data.artist;
        }
    onYesClick(artist: Artist): void {
        this.artistService.removeArtist(artist).subscribe();
    }
}