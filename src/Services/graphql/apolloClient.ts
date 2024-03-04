import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { getCookie } from "../../Shared/Utils/helperFunctions";
const token = getCookie("access_token") ?? null;

const httpLink = new HttpLink({
	uri: "http://localhost:8082/graphql", //Developement
	// uri: "http://54.161.147.89:8082/graphql", //Production
	headers: {
		Authorization: token ? `Bearer ${token}` : " ",
	},
});

export const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});
