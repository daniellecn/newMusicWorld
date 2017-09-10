import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
const wsClient = new SubscriptionClient(`ws://localhost:5000/graphql-subscription`, {
	reconnect: true
});

// Create a normal network interface:
const networkInterface = createNetworkInterface({
	uri: 'http://localhost:4200/graphql',
	opts: {
		credentials: 'include'
	}
});

// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
	networkInterface,
	wsClient
);
// by default, this client will send queries to `/graphql` (relative to the URL of your app)
export function createClient() {
	return new ApolloClient({
		networkInterface: networkInterfaceWithSubscriptions
	})
}
