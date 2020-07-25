import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import SocketProvider from "../components/socket_context";

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <SocketProvider>
      {element}
    </SocketProvider>
  </ApolloProvider>
);
