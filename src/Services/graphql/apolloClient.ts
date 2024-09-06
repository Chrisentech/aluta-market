import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { getCookie } from "../../Shared/Utils/helperFunctions";
const token = getCookie("access_token") ?? null;

const httpLink = new HttpLink({
	//uri: "https://api.thealutamarket.com/graphql", //Production
	uri: "https://aluta-market-api.onrender.com/graphql", //Production
	// uri: "http://localhost:8082/graphql", //Development
	headers: {
		Authorization: token ? `Bearer ${token}` : "",
	},
});

export const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(), 
});
