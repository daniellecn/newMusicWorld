import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';


import { Song } from './../Modules/song';
import { Artist } from './../Modules/artist';
import { ArtistService } from './../Services/artist.service';

@Component({
    selector: 'song-edit',
    templateUrl: './../Views/songAddEditDialog.component.html',
    styleUrls: ['./../CSS/song.component.css']
})

export class SongAddEditDialogComponent {
    selectedSong: Song;
    artistsOptions: Artist[];
    title: String;
    constructor(public dialogRef: MdDialogRef<SongAddEditDialogComponent>,
        @Inject(MD_DIALOG_DATA) public data: any,
        private artistService: ArtistService) {
        this.selectedSong = data.selectedSong;
        this.title = data.title;
        artistService.getArtists().then(artists => this.artistsOptions = artists);
    }
    onYesClick(): void {
    }

    artistControl: FormControl = new FormControl();

    displayNames(artistOption: Artist): string {
        return artistOption ? (artistOption.firstName && ' ' && artistOption.lastName) : artistOption.firstName;
    }
}