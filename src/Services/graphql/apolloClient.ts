import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
const token = null;

const httpLink = new HttpLink({
  uri: "http://localhost:8082/graphql",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
