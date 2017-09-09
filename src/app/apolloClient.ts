import { ApolloClient, createNetworkInterface } from 'apollo-client';

// by default, this client will send queries to `/graphql` (relative to the URL of your app)
export function createClient() {
	return new ApolloClient({
		networkInterface: createNetworkInterface({
			uri: 'http://localhost:4200/graphql'
		}),
	})
}
