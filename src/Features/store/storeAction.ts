import { useDispatch, useSelector } from "react-redux";
// import { apolloClient } from "../../Services/graphql/apolloClient";
import {
	actions,
	selectMaintenanceMode,
	selectStore,
	selectStores,
	selectSellerStore
} from "./storeSlice";
import { apolloClient } from "../../Services/graphql/apolloClient";
import {
	CREATE_NEW_STORE,
	GET_MY_STORE,
	GET_MY_STORE_BY_NAME,
	GET_MY_STORES,
	UPDATE_MY_STORE,
	UPDATE_ORDER,
	UPDATE_STORE_FOLLOWERSHIP,
	WITHDRAW_FUND
} from "../../Services/graphql/store";
import { alertError, alertSuccess } from "../alert/alertSlice";
import { setLoading, setNotLoading } from "../loading/loadingSlice";
export default function useStore() {
	const dispatch = useDispatch();
	const maintenanceMode = useSelector(selectMaintenanceMode);
	const mystores = useSelector(selectStores);
	const mystore = useSelector(selectStore);
	const sellerStore = useSelector(selectSellerStore)


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
	const getStore = async (id: Number | String) => {
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
		dispatch(actions.setSellerStore(response.data.StoreByName));
	};
	const createStore = async (input: any) => {
		const response = await apolloClient.mutate({
			mutation: CREATE_NEW_STORE,
			variables: { input },
		});
		dispatch(actions.setStore(response.data.createStore));
	};
	const updateStore = async (input: any) => {

		try {
			const response = await apolloClient.mutate({
				mutation: UPDATE_MY_STORE,
				variables: { input },
			});

			if (response.data.updateStore) {
				// Or however you access your state
				// Spread current state, then spread input to override any matching fields
				const updatedStore = {
					...mystore,
					...input
				};


				// Dispatch the updated store
				dispatch(actions.setStore(updatedStore));
			}
		} catch (e: any) {
			console.log(e)

			throw new Error(e)
		}

	};
	const setMaintenanceMode = async (mode: boolean, id: any) => {
		console.log(mode)
		await updateStore({ id, status: mode })
		dispatch(actions.setMaintenanceMode(mode));
	};

	const updateStoreFollowership = async (input: any) => {
		try {
			const response = await apolloClient.mutate({
				mutation: UPDATE_STORE_FOLLOWERSHIP,
				variables: { input },
			});

			if (response.data.updateStoreFollower) {
				let updatedStore;

				// Ensure followers is an array, or default it to an empty array if null/undefined
				const currentFollowers = sellerStore.followers ?? [];

				if (input.action === 'follow') {
					// Add new follower to the followers array
					updatedStore = {
						...sellerStore,
						followers: [...currentFollowers, input], // Add new follower
					};
				} else if (input.action === 'unfollow') {
					// Remove all followers with the same follower_name
					updatedStore = {
						...sellerStore,
						followers: currentFollowers.filter(
							(follower: any) => follower.follower_name !== input.follower_name
						),
					};
				}

				// Dispatch the updated store
				dispatch(actions.setSellerStore(updatedStore));
			}
		} catch (error: any) {
			throw new Error(error?.message);
		}
	};



	const updateOrders = async (input: any) => {
		try {
			const response = await apolloClient.mutate({
				mutation: UPDATE_ORDER,
				variables: { input },
			});
			dispatch(alertSuccess(response));
		} catch (error: any) {
			throw new Error(error?.message);
		}
	};
	const widthdrawFund = async (input: any) => {
		try {
			const response = await apolloClient.mutate({
				mutation: WITHDRAW_FUND,
				variables: { input },
			});
			dispatch(alertSuccess(response));
		} catch (error: any) {
			console.log(error)
			throw new Error(error?.message);
		}
	};
	return {
		maintenanceMode,
		setMaintenanceMode,
		getMyStores,
		getStore,
		getStoreByName,
		mystores,
		mystore,
		sellerStore,
		createStore,
		updateStore,
		updateOrders,
		updateStoreFollowership,
		widthdrawFund
	};
}
