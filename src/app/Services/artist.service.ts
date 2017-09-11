import { allSongs, topSongs } from './song.service';
import { Observable } from 'rxjs/Rx';
import { ApolloExecutionResult } from 'apollo-client/core/types';
import { ApolloQueryObservable } from 'apollo-angular/build/src';
import { Injectable } from '@angular/core';

import { Artist } from './../Modules/artist';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

export const topArtists = gql`
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

export const searchArtists = gql`
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

let searchVariables: any = {};

@Injectable()
export class ArtistService {
    constructor(private apollo: Apollo) { }

    searchArtists(firstName: string, lastName: string, country: string): Observable<ApolloExecutionResult<{ artistQueries: { search: Artist[] } }>> {
        searchVariables = {
            firstName,
            lastName,
            country
        };
        return this.apollo.watchQuery({
            fetchPolicy: "network-only",
            query: searchArtists,
            variables: {
                firstName,
                lastName,
                country
            }
        });
    }

    getTopArtists(): Observable<ApolloExecutionResult<{ artistQueries: { topArtists: Artist[] } }>> {
        return this.apollo.watchQuery({
            query: topArtists
        })
    }

    getAllArtists(): Observable<ApolloExecutionResult<{ artistQueries: { allArtists: Artist[] } }>> {
        const allArtists = gql`
        query allArtists{
        artistQueries {
            allArtists {
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
            query: allArtists
        })
    }

    createArtist(artist: Artist): Observable<ApolloExecutionResult<{ artistMutations: { createArtist: Artist } }>> {
        const createArtist = gql`
        mutation createArtist($input:ArtistInput!) {
            artistMutations {
              createArtist(input: $input) {
                id
                firstName
                lastName
                country
              }
            }
          }
        `;

        return this.apollo.mutate({
            mutation: createArtist,
            variables: {
                input: artist
            }
        });
    }

    updateArtist(artist: Artist): Observable<ApolloExecutionResult<{ artistMutations: { createArtist: Artist } }>> {
        const updateArtist = gql`
        mutation updateArtist($id: ID!, $input:ArtistInput!) {
            artistMutations {
              updateArtist(id: $id, input: $input) {
                id
                firstName
                lastName
                country
              }
            }
          }
        `;
        let input = Object.assign({}, artist);
        delete input.id;
        delete input.views;
        delete input['__typename'];

        return this.apollo.mutate({
            mutation: updateArtist,
            variables: {
                id: artist.id,
                input
            }
        });
    }
    
    removeArtist(artist: Artist): Observable<ApolloExecutionResult<{ artistMutations: { createArtist: Artist } }>> {
        const removeArtist = gql`
        mutation removeArtist($id: ID!) {
            artistMutations {
              removeArtist(id: $id) {
                id
                firstName
                lastName
                country
              }
            }
          }
        `;

        return this.apollo.mutate({
            mutation: removeArtist,
            variables: {
                id: artist.id,
            },
            refetchQueries: [{
                query: topArtists
            }, {
                query: topSongs
            }, {
                query: allSongs
            }]
        });
    }
}