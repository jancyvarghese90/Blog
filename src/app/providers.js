'use client';

import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';

export function Providers({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
