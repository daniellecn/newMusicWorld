import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Artist } from './../Modules/artist';
import { ArtistService } from './../Services/artist.service'

@Component({
  selector: 'artist',
  templateUrl: './../Views/artist.component.html',
//   styleUrls: ['./CSS/login.component.css'],
})
export class ArtistComponent implements OnInit { 
    artistsTable: Artist[] = [];
    showTable: boolean = false;
    @Input() artistSearch: Artist;
    
    constructor(private artistService: ArtistService) { 
        this.artistSearch = new Artist();
        this.artistsTable = [];
        alert('constructor ' && this.artistsTable);
        // alert(this.artistsTable.length);
        // this.artistSearch.firstName = 'Danielle';
        // alert(this.artistSearch.firstName);
        // this.artistsTable.push(this.artistSearch);
        // alert(this.artistsTable.length);
    }

    getArtist(): void {
        // this.artistService.getArtists().then(function(artists: Artist[]){
        //     alert(this);
        //     // this.artists = artists;
        //     // alert(this.artists.length);
        // });
        // alert(this.artistsTable);
        // this.artistService.getArtists().then(heroes => alert(this.artistsTable));
    }

    ngOnInit(): void{
        alert('init ' && this.artistsTable);
        // this.getArtist();
        // alert(this.artists.length);
        // for(var i = 0; i <= this.artists.length; i++){
        //     alert(this.artists[i].firstName);
        // }
    }

    searchArtist(artistSearch: Artist): Artist[]{
        // this.showTable = true;
        return this.artistsTable;
    }
}