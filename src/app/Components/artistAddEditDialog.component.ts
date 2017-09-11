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
    selectedArtist: Artist;

        constructor(public dialogRef: MdDialogRef<ArtistAddEditDialogComponent>,
        @Inject(MD_DIALOG_DATA) public data: any,
        private artistService: ArtistService) {
        this.selectedArtist = data.selectedSong;
        this.title = data.title;
    }

    saveArtist(artist: Artist){
        if(this.title.localeCompare(`ADD NEW ARTIST`)){
            this.artistService.createArtist(artist);
        }else{
            this.artistService.updateArtist(artist);
        }
    }
}