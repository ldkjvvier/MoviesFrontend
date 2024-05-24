import { ApolloClient, InMemoryCache } from "@apollo/client"
export const apolloConfig = new ApolloClient({
	uri: 'http://localhost:4000/',
	cache: new InMemoryCache(),
})
