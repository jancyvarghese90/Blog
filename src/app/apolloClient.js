// src/lib/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://blog-internship.onrender.com/graphql', // Replace with your actual backend URL
  cache: new InMemoryCache(),
});

export default client;
