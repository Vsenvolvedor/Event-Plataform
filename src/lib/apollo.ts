import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4t38zsx2ub601yx0alc81he/master',
  cache: new InMemoryCache()
});