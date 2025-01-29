import { ApolloClient, InMemoryCache } from '@apollo/client';

export const API_GRAPHQL_SERVER = 'http://localhost:4000/'

export const graphqlClient = new ApolloClient({
  uri: API_GRAPHQL_SERVER,
  cache: new InMemoryCache(),
});
