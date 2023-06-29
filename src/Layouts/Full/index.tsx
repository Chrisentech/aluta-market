import React from "react";
import { Wrapper } from "./full.style";
import { Loader } from "../../Shared/Components";

const Screen: React.FC = (props: any) => {
  
  return <Wrapper loading={props.loading}>
   {props.loading && <Loader/>}
    {props.children}
    </Wrapper>;
};

export default Screen;
