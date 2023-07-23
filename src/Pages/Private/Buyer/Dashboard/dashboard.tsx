import React from "react";
import { Wrapper } from "./dashboard.styles";
import Layout from "../../../../Layouts";

const Screen: React.FC = () => {
  return <Wrapper>buyer dashboard</Wrapper>;
};

const Dashboard = () => {
  return <Layout layout={"dashboard"} component={Screen} state={false} />;
};

export default Dashboard;
