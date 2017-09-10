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
}