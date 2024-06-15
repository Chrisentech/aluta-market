import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { getCookie } from "../../Shared/Utils/helperFunctions";
const token = getCookie("access_token") ?? null;

const httpLink = new HttpLink({
	uri: "https://aluta-market-server-a841f6d3f7b8.herokuapp.com/graphql", //Developement
	// uri: "https://aluta-market-api.onrender.com/graphql", //Production
	// uri: "http://localhost:8082/graphql", //Production
	headers: {
		Authorization: token ? `Bearer ${token}` : "",
	},
});

export const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});
