import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

import { Artist } from './../Modules/artist';
import { ArtistService } from './../Services/artist.service'
import { ArtistDetailComponent } from './../Components/artistDetail.component';

@Component({
  selector: 'artist',
  templateUrl: './../Views/artist.component.html',
//   styleUrls: ['./CSS/login.component.css'],
})

export class ArtistComponent implements OnInit { 
    // artists: Artist[];
    artists: Array<Artist>;
    showTable: boolean = false;
    selectedArtist: Artist;
    @Input() artistSearch: Artist;
    
    constructor(private artistService: ArtistService,
                private router: Router,
                public dialog: MdDialog) { 
        this.artistSearch = new Artist();
        // this.artists = [];
        this.artists = new Array<Artist>();
    }

    getArtist(): void {
        this.artistService.getArtists().then(function(artists: Artist[]){
            this.artists = artists;
        }.bind(this));
    }

    ngOnInit(): void{
        this.getArtist();
    }

    searchArtist(artistSearch: Artist): Artist[]{
        this.showTable = true;
        return this.artists;
    }

    goToArtistDelete(artist: Artist){
        //this.artists.
    }

    goToArtistDetails(){
        // this.router.navigate(['/detail', this.selectedArtist]);
        let dialogRef = this.dialog.open(ArtistDetailComponent, {
        height: '400px',
        width: '600px',
        data: { artist: this.selectedArtist }});
    }
}