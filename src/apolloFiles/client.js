import { ApolloClient, InMemoryCache } from '@apollo/client';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  fetch,
});

