import { Observable } from 'rxjs/Rx';
import { ApolloExecutionResult } from 'apollo-client/core/types';
import { ApolloQueryObservable } from 'apollo-angular/build/src';
import { Injectable } from '@angular/core'

import { User } from './../Modules/user';
import { USERS } from './../Mocks/mock-users';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class UserService {
    constructor(private apollo: Apollo) { }

    login(userName: string, password: string): Observable<ApolloExecutionResult<{ userMutations: { loginUser: User } }>> {
        const loginUser = gql`
        mutation loginUser($userName: String!, $password:String!) {
            userMutations {
              loginUser(userName: $userName, password: $password) {
                __typename 
                id
                userName
                firstName
                lastName
                isAdmin
              }
            }
          }
        `

        return this.apollo.mutate({
            mutation: loginUser,
            variables: {
                userName: userName,
                password: password
            },
            updateQueries: {
                // update apollo store
                connectedUser: (prev, { mutationResult }) => {
                    if (!mutationResult.data) { return prev; }

                    return Object.assign({}, prev, {
                        userQueries: {
                            me: mutationResult.data.userMutations.loginUser
                        },
                    });
                },
            },
        });
    }

    register(user: User): Observable<ApolloExecutionResult<{ userMutations: { createUser: User } }>> {
        const registerUser = gql`
        mutation registerUser($userName: String!, $password:String!, $firstName: String!, $lastName: String!) {
          userMutations {
            createUser(userName: $userName, password:$password, firstName:$firstName, lastName:$lastName) {
                __typename 
              id
              userName
              firstName
              lastName
              isAdmin
            }
          }
        }
        `;

        return this.apollo.mutate({
            mutation: registerUser,
            variables: user,
            updateQueries: {
                // update apollo store
                connectedUser: (prev, { mutationResult }) => {
                    if (!mutationResult.data) { return prev; }

                    return Object.assign({}, prev, {
                        userQueries: {
                            me: mutationResult.data.userMutations.createUser
                        },
                    });
                },
            },
        });
    }

    logout(): Observable<ApolloExecutionResult<{ userMutation: { disconnect: boolean } }>> {
        const logoutUser = gql`
        mutation logoutUser {
          userMutations {
            disconnect
          }
        }
        `;

        return this.apollo.mutate({
            mutation: logoutUser,
            updateQueries: {
                // update apollo store
                connectedUser: (prev, { mutationResult }) => {
                    if (!mutationResult.data) { return prev; }

                    return Object.assign({}, prev, {
                        userQueries: {
                            me: null
                        },
                    });
                },
            },
        });
    }

    connectedUser(): Observable<ApolloExecutionResult<{ userQueries: { me: User } }>> {
        const connectedUser = gql`
        query connectedUser {
          userQueries {
            me {
              __typename 
              id
              userName
              firstName
              lastName
              isAdmin
            }
          }
        }
        `;

        return this.apollo.watchQuery({
            query: connectedUser
        })
    }

    public subscribeToNewUsers(): Observable<{ userCreated: User }> {
        const newUser = gql`
        subscription newUser{
            userCreated {
              id
              userName
              firstName
              lastName
            }
          }
        `;

        return this.apollo.subscribe({
            query: newUser
        })
    }
}