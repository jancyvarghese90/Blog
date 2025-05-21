// src/lib/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/', // Replace with your actual backend URL
  cache: new InMemoryCache(),
});

export default client;
