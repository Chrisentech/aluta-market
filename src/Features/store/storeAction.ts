import { useDispatch, useSelector } from "react-redux";
// import { apolloClient } from "../../Services/graphql/apolloClient";
import {
	actions,
	selectMaintenanceMode,
	selectStore,
	selectStores,
} from "./storeSlice";
import { apolloClient } from "../../Services/graphql/apolloClient";
import {
	GET_MY_STORE,
	GET_MY_STORE_BY_NAME,
	GET_MY_STORES,
} from "../../Services/graphql/store";
import { alertError } from "../alert/alertSlice";
export default function useStore() {
	const dispatch = useDispatch();
	const maintenanceMode = useSelector(selectMaintenanceMode);
	const mystores = useSelector(selectStores);
	const mystore = useSelector(selectStore);

	const setMaintenanceMode = (mode: boolean) => {
		dispatch(actions.setMaintenanceMode(mode));
	};
	const getMyStores = async (filter?: any) => {
		try {
			const response = await apolloClient.query({
				query: GET_MY_STORES,
				variables: {
					user: filter.user,
					limit: filter.limit,
					offset: filter.offset,
				},
			});
			dispatch(actions.setStores(response.data.Stores.data));
			dispatch(actions.setStore(response.data.Stores.data[0]));
		} catch (error: any) {
			let parsedErr = JSON.parse(error.message);
			dispatch(
				alertError({ message: parsedErr?.message, code: parsedErr?.code })
			);
		}

		// setCookie("store_id", state?.store?.store?.id, 7);
	};
	const getStore = async (id: Number) => {
		const response = await apolloClient.query({
			query: GET_MY_STORE,
			variables: { id },
		});
		dispatch(actions.setStore(response.data.Store));
	};
	const getStoreByName = async (name: String) => {
		const response = await apolloClient.query({
			query: GET_MY_STORE_BY_NAME,
			variables: { name },
		});
		dispatch(actions.setStore(response.data.Store));
	};
	return {
		maintenanceMode,
		setMaintenanceMode,
		getMyStores,
		getStore,
		getStoreByName,
		mystores,
		mystore,
	};
}
