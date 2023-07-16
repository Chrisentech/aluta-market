import React, { ReactNode } from "react";
import { Wrapper } from "./full.style";
import { Loader } from "../../Shared/Components";

interface IScreenProps{
  loading:boolean,
  children:ReactNode
}

const Screen: React.FC<IScreenProps> = ({loading,children}) => {
  
  return <Wrapper loading={loading}>
   {loading && <Loader/>}
    {children}
    </Wrapper>;
};

export default Screen;
