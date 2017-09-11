import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';


import { Song } from './../Modules/song';
import { Artist } from './../Modules/artist';
import { ArtistService } from './../Services/artist.service';
import { SongService } from './../Services/song.service';

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
        private artistService: ArtistService,
        private songService: SongService) {
        this.selectedSong = data.selectedSong;
        this.title = data.title;
        this.getArtists();
        // artistService.getArtists().then(artists => this.artistsOptions = artists);
    }

    getArtists(): void{
        // this.artistService.getAllArtists().subscribe(({ data }) => {
        //     this.artistsOptions = data.artistQueries.allArtists;
        // })
    }

    onYesClick(): void {
    }

    artistControl: FormControl = new FormControl();

    displayNames(artistOption: Artist): string {
        return artistOption ? (artistOption.firstName && ' ' && artistOption.lastName) : artistOption.firstName;
    }

    saveSong(song: Song){
        if(this.title.localeCompare(`ADD NEW SONG`)){
            this.songService.createSong(song);
        }else{
            this.songService.updateSong(song);
        }
    }
}