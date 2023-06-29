import React from "react";
import Layout from "../../../Layouts";
// import Screen from "./Screen";

const Screen: React.FC = () => {
  return (
    <>
      {/* <p style={{ color: "green" }}>Hello world</p>
      <h1 style={{ color: "green" }}>Hello world</h1>
      <h1 style={{ color: "green" }}>Hello world</h1> */}
    </>
  );
};

const HomePage = () => {
  const layout = "full";
  return <Layout layout={layout} component={Screen} state={true} />;
};

export default HomePage;
