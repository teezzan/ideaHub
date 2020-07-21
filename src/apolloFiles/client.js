import { ApolloClient, InMemoryCache } from '@apollo/client';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjke2kn7p00ol01d2pinkptdj/master',
  cache: new InMemoryCache(),
  fetch,
});

