import { topArtists } from './artist.service';
import { Observable } from 'rxjs/Rx';
import { ApolloExecutionResult } from 'apollo-client/core/types';
import { ApolloQueryObservable } from 'apollo-angular/build/src';
import { Injectable } from '@angular/core'

import { Song } from './../Modules/song';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

export const topSongs = gql`
query topSongs{
songQueries {
    topSongs {
        id
           name
        artist {
          id
          firstName
          lastName
        }
        album
        publisher
        publicationYear
        genere
        views
        words
      }
    }
  }
`;

export const allSongs = gql`
query allSongs{
    songQueries {
      allSongs {
        id
           name
        artist {
          id
          firstName
          lastName
        }
        album
        publisher
        publicationYear
        genere
        views
        words
      }
    }
  }
`;


@Injectable()
export class SongService {
    constructor(private apollo: Apollo) { }

    getSongs(): Observable<ApolloExecutionResult<{ songQueries: { allSongs: Song[] } }>> {

        return this.apollo.watchQuery({
            query: allSongs
        })
    }

    getTopSongs(): Observable<ApolloExecutionResult<{ songQueries: { topSongs: Song[] } }>> {
        return this.apollo.watchQuery({
            query: topSongs
        })
    }

    removeSong(id: string): Observable<ApolloExecutionResult<{ songMutations: { removeSong: Song } }>> {
        const removeSong = gql`
        mutation removeSong($songId:ID!){
            songMutations {
              removeSong(id: $songId) {
                id
              }
            }
          }
        `;

        return this.apollo.mutate({
            mutation: removeSong,
            variables: {
                songId: id
            },
            refetchQueries: [{
                query: topSongs
            }],
            updateQueries: {
                allSongs: (prev, { mutationResult }) => {
                    if (!mutationResult.data) { return prev; }

                    return Object.assign({}, prev, {
                        songQueries: {
                            allSongs: prev.songQueries.allSongs.filter((song: Song) => song.id !== mutationResult.data.songMutations.removeSong.id)
                        },
                    });
                },
            },
        });
    }

    createSong(song: Song): Observable<ApolloExecutionResult<{ songMutations: { createSong: Song } }>> {
        const input = Object.assign({}, song, {
            artist: song.artist.id
        });
        const createSong = gql`
        mutation createSong($input: SongInput) {
            songMutations {
              createSong(input: $input) {
                id
                name
                artist {
                  id
                }
                album
                publisher
                publicationYear
                genere
                views
                words
                
              }
            }
          }
        `;

        return this.apollo.mutate({
            mutation: createSong,
            variables: {
                input
            },
            updateQueries: {
                allSongs: (prev, { mutationResult }) => {
                    if (!mutationResult.data) { return prev; }

                    return Object.assign({}, prev, {
                        songQueries: {
                            allSongs: [...prev.songQueries.allSongs, mutationResult.data.songMutations.createSong]
                        },
                    });
                },
            },
        });
    }

    updateSong(song: Song): Observable<ApolloExecutionResult<{ songMutations: { updateSong: Song } }>> {
        const input = Object.assign({}, song, {
            artist: song.artist.id
        });
        delete input.id;
        delete input['__typename'];

        const updateSong = gql`
        mutation updateSong($songId:ID!, $input: SongInput) {
            songMutations {
              updateSong(id: $songId,input: $input) {
                id
                name
                artist {
                  id
                }
                album
                publisher
                publicationYear
                genere
                views
                words
                
              }
            }
          }
        `;

        return this.apollo.mutate({
            mutation: updateSong,
            variables: {
                songId: song.id,
                input
            },
            refetchQueries: [{
                query: topSongs
            }, {
                query: topArtists
            }]
        });
    }

    songViewed(song: Song): Observable<ApolloExecutionResult<{ songMutations: { songViewed: Song } }>> {
        const songViewed = gql`
        mutation songViewed($songId:ID!) {
            songMutations {
              songViewed(id: $songId){
                id
                name
                artist {
                  id
                }
                album
                publisher
                publicationYear
                genere
                views
                words
              }
            }
          }
        `;

        return this.apollo.mutate({
            mutation: songViewed,
            variables: {
                songId: song.id,
            },
            refetchQueries: [{
                query: topSongs
            }, {
                query: topArtists
            }]
        });
    }
}