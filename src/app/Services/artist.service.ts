import { Injectable } from '@angular/core'

import { Artist } from './../Modules/artist';
import { ARTISTS } from './../Mocks/mock-artists';

@Injectable ()
export class ArtistService{
    getArtists(): Promise<Artist[]>{
        return Promise.resolve(ARTISTS);
    }

    // getArtist(userName: string): User {
    //  return this.getUsers().find(user => user.userName === userName);
    // }
}