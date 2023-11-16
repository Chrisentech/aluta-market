import { useDispatch, useSelector } from "react-redux";
// import { apolloClient } from "../../Services/graphql/apolloClient";
import { actions, selectMaintenanceMode } from "./storeSlice";
import { apolloClient } from "../../Services/graphql/apolloClient";
import { GET_MY_STORE, GET_MY_STORES } from "../../Services/graphql/store";
import { setLoading, setNotLoading } from "../loading/loadingSlice";


export default function useStore() {
  const dispatch = useDispatch();
  const maintenanceMode = useSelector(selectMaintenanceMode);

  const setMaintenanceMode = (mode: boolean) => {
    dispatch(actions.setMaintenanceMode(mode))
  }
  const getMyStores = async(filter?:any) => {
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

		// setCookie("store_id", state?.store?.store?.id, 7);
	}
   const getStore = async (id: Number) => {
			const response = await apolloClient.query({
				query: GET_MY_STORE,
				variables: {id},
			});
			dispatch(actions.setStore(response.data.Store));
		};
  return {
		maintenanceMode,
		setMaintenanceMode,
		getMyStores,
		getStore,
	};
}
