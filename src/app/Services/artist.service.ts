import { Injectable } from '@angular/core';

import { Artist } from './../Modules/artist';
import { ARTISTS } from './../Mocks/mock-artists';

@Injectable ()
export class ArtistService{
    getArtists(): Promise<Artist[]>{
        return Promise.resolve(ARTISTS);
    }

    getArtistsWithPlays(): Promise<Artist[]>{
        return Promise.resolve(ARTISTS);
    }

    
    // getArtist(artist: Artist): Artist {
    //  return this.getUsers().find(user => user.userName === userName);
    // }
}