import { Observable } from 'rxjs/Rx';
import { ApolloExecutionResult } from 'apollo-client/core/types';
import { ApolloQueryObservable } from 'apollo-angular/build/src';
import { Injectable } from '@angular/core';

import { Artist } from './../Modules/artist';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable ()
export class ArtistService{
    constructor(private apollo: Apollo) {}
    
    searchArtists(firstName: string, lastName: string, country: string): Observable<ApolloExecutionResult<{ artistQueries: { search: Artist[] } }>> {
        const searchArtists = gql`
        query searchArtists($firstName:String, $lastName:String, $country:String) {
            artistQueries {
              search(firstName:$firstName, lastName:$lastName, country:$country) {
                id
                firstName
                lastName
                country
                views
              }
            }
          }
        `;

        return this.apollo.watchQuery({
            query: searchArtists,
            variables: {
                firstName,
                lastName,
                country
            }
        });
    }

    getTopArtists(): Observable<ApolloExecutionResult<{ artistQueries: { topArtists: Artist[] } }>> {
        const topArtists = gql`
        query topArtists{
            artistQueries {
              topArtists {
                id
                firstName
                lastName
                country
                views
              }
            }
          }
        `;

        return this.apollo.watchQuery({
            query: topArtists
        })
    }

    
    // getArtist(artist: Artist): Artist {
    //  return this.getUsers().find(user => user.userName === userName);
    // }
}