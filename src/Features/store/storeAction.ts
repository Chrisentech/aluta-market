import { useDispatch, useSelector } from "react-redux";
// import { apolloClient } from "../../Services/graphql/apolloClient";
import { actions, selectMaintenanceMode } from "./storeSlice";


export default function useStore() {
  const dispatch = useDispatch();
  const maintenanceMode = useSelector(selectMaintenanceMode);

  const setMaintenanceMode = (mode: boolean) => {
    dispatch(actions.setMaintenanceMode(mode))
  }
  return {
    maintenanceMode,
    setMaintenanceMode
  };
}
