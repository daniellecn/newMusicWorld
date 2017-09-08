import { Injectable } from '@angular/core'

import { Song } from './../Modules/song';
import { SONGS } from './../Mocks/mock-songs';

@Injectable ()
export class SongService{
    getSongs(): Promise<Song[]>{
        return Promise.resolve(SONGS);
    }

    getSongsWithPlays(): Promise<Song[]>{
        return Promise.resolve(SONGS);
    }

    // getArtist(artist: Artist): Artist {
    //  return this.getUsers().find(user => user.userName === userName);
    // }
}