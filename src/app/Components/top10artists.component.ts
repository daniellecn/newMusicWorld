import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Artist } from './../Modules/artist';
import { ArtistService } from './../Services/artist.service'

@Component({
  selector: 'top10artists',
  templateUrl: './../Views/top10artists.component.html'
//   styleUrls: ['./CSS/login.component.css'],
})
export class Top10ArtistsComponent { 
    artists: Array<Artist>;

    constructor(private artistService: ArtistService) { 
        this.artists = new Array<Artist>();
        this.getArtist();
    }
    
    getArtist(): void {
        this.artistService.getArtistsWithPlays().then(function(artists: Artist[]){
            this.artists = artists;
        }.bind(this));
    }
}