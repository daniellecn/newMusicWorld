"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_client_1 = require("apollo-client");
var subscriptions_transport_ws_1 = require("subscriptions-transport-ws");
var wsClient = new subscriptions_transport_ws_1.SubscriptionClient("ws://localhost:5000/graphql-subscription", {
    reconnect: true
});
// Create a normal network interface:
var networkInterface = apollo_client_1.createNetworkInterface({
    uri: 'http://localhost:4200/graphql',
    opts: {
        credentials: 'include'
    }
});
// Extend the network interface with the WebSocket
var networkInterfaceWithSubscriptions = subscriptions_transport_ws_1.addGraphQLSubscriptions(networkInterface, wsClient);
// by default, this client will send queries to `/graphql` (relative to the URL of your app)
function createClient() {
    return new apollo_client_1.ApolloClient({
        networkInterface: networkInterfaceWithSubscriptions
    });
}
exports.createClient = createClient;
//# sourceMappingURL=apolloClient.js.map