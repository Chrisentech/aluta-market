import React from "react";
import Layout from "../../../Layouts";
import { Home } from "./homepage.styles";
import { View } from "../../../Shared/Components";

const Screen: React.FC = () => {
  return (
    <Home>
      <div style={{ width: 900, margin: "30px auto" }}>
        <View mode="flex" itempergrid={3} type="productGrid" />
      </div>
    </Home>
  );
};

const HomePage = () => {
  // const { loading } = useSelector((store: any) => store.products);
  return <Layout layout={"full"} component={Screen} state={false} />;
};

export default HomePage;
