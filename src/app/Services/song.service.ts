import { Observable } from 'rxjs/Rx';
import { ApolloExecutionResult } from 'apollo-client/core/types';
import { ApolloQueryObservable } from 'apollo-angular/build/src';
import { Injectable } from '@angular/core'

import { Song } from './../Modules/song';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class SongService {
    constructor(private apollo: Apollo) { }

    getSongs(): Observable<ApolloExecutionResult<{ songQueries: { allSongs: Song[] } }>> {
        const allSongs = gql`
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

        return this.apollo.watchQuery({
            query: allSongs
        })
    }

    getTopSongs(): Observable<ApolloExecutionResult<{ songQueries: { topSongs: Song[] } }>> {
        const topSongs = gql`
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

        return this.apollo.watchQuery({
            query: topSongs
        })
    }

    createSong(song: Song): string{
        return `Song added successfully`;
    }

    updateSong(song: Song): string{
        return `Song updated successfully`;
    }

    removeSong(id: string): Observable<ApolloExecutionResult<{ songMutations: { removeSong: Song[] } }>> {
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
            updateQueries: {
                // update apollo store
                topSongs: (prev, { mutationResult }) => {
                    if (!mutationResult.data) { return prev; }

                    return Object.assign({}, prev, {
                        songQueries: {
                            topSongs: prev.songQueries.topSongs.filter((song: Song) => song.id !== mutationResult.data.songMutations.removeSong.id)
                        },
                    });
                },
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
}