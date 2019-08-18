import ApolloClient from "apollo-client";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from "apollo-cache-inmemory";
import { BatchHttpLink } from "apollo-link-batch-http";
import introspectionResult from "./fragmentTypes";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult
});

export const cache = new InMemoryCache({ fragmentMatcher });

export const client = new ApolloClient({
  link: new BatchHttpLink({ uri: "http://localhost:4000" }),
  cache
});
