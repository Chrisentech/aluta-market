import React, { useEffect } from "react";
import Layout from "../../../Layouts";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../Features/products/productSlice";
import { Home } from "./homepage.styles";
import { View } from "../../../Shared/Components";

const Screen: React.FC = () => {
  const dispatch: ThunkDispatch<{}, unknown, any> = useDispatch();

  const { data, error } = useSelector((state: any) => state.products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <Home>
      <div style={{ width: 900, margin: "30px auto" }}>
        <View mode="grid" />
      </div>
    </Home>
  );
};

const HomePage = () => {
  const { loading } = useSelector((store: any) => store.products);
  return <Layout layout={"full"} component={Screen} state={false} />;
};

export default HomePage;
