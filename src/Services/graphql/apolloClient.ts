import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { getCookie } from "../../Shared/Utils/helperFunctions";
export const token = getCookie("access_token") ?? null;
let BE_URI = " https://aluta-market-api.onrender.com"
// export const ws = new WebSocket("ws://localhost:8082/ws?token=" + token);
export const ws = new WebSocket("wss://aluta-market-api.onrender.com/ws?token=" + token);



const httpLink = new HttpLink({
	//uri: "https://api.thealutamarket.com/graphql", //Production
	uri: BE_URI + "/graphql", //Production
	// uri: "http://localhost:8082/graphql", //Development
	headers: {
		Authorization: token ? `Bearer ${token}` : "",
	},
});

export const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});
