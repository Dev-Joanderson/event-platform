import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sxrfon2oz101z177v1bhqu/master',
  cache: new InMemoryCache()
});