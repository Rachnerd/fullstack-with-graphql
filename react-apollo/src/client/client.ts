import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BatchHttpLink } from "apollo-link-batch-http";

export const cache = new InMemoryCache({});

export const client = new ApolloClient({
  link: new BatchHttpLink({ uri: "http://localhost:8080/graphql" }),
  cache
});
