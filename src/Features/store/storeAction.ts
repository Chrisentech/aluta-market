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
	CREATE_NEW_STORE,
	GET_MY_STORE,
	GET_MY_STORE_BY_NAME,
	GET_MY_STORES,
	UPDATE_MY_STORE,
} from "../../Services/graphql/store";
import { alertError } from "../alert/alertSlice";
import { setLoading, setNotLoading } from "../loading/loadingSlice";
export default function useStore() {
	const dispatch = useDispatch();
	const maintenanceMode = useSelector(selectMaintenanceMode);
	const mystores = useSelector(selectStores);
	const mystore = useSelector(selectStore);

	const setMaintenanceMode = (mode: boolean) => {
		dispatch(actions.setMaintenanceMode(mode));
	};
	const getMyStores = async (filter?: any) => {
		dispatch(setLoading());
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
			// dispatch(actions.setStore(response.data.Stores.data[0]));
			dispatch(setNotLoading());
		} catch (error: any) {
			let parsedErr = JSON.parse(error.message);
			dispatch(
				alertError({ message: parsedErr?.message, code: parsedErr?.code })
			);
			dispatch(setNotLoading());
		}

		// setCookie("store_id", state?.store?.store?.id, 7);
	};
	const getStore = async (id: Number) => {
		dispatch(setLoading());

		const response = await apolloClient.query({
			query: GET_MY_STORE,
			variables: { id },
		});
		dispatch(actions.setStore(response.data.Store));
		dispatch(setNotLoading());
	};
	const getStoreByName = async (name: String) => {
		// dispatch(setLoading());
		const response = await apolloClient.query({
			query: GET_MY_STORE_BY_NAME,
			variables: { name },
		});
		dispatch(actions.setStore(response.data.StoreByName));
	};
	const createStore = async (input: any) => {
		const response = await apolloClient.mutate({
			mutation: CREATE_NEW_STORE,
			variables: { input },
		});
		dispatch(actions.setStore(response.data.createStore));
	};
	const updateStore = async (input: any) => {
		const response = await apolloClient.mutate({
			mutation: UPDATE_MY_STORE,
			variables: { input },
		});
		dispatch(actions.setStore(response.data.updateStore));
	};
	return {
		maintenanceMode,
		setMaintenanceMode,
		getMyStores,
		getStore,
		getStoreByName,
		mystores,
		mystore,
		createStore,
		updateStore,
	};
}
