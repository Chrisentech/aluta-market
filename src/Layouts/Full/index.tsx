import React, { ReactNode } from "react";
import { Wrapper } from "./full.style";
import { Loader,Footer } from "../../Shared/Components";

interface IScreenProps{
  children:ReactNode
}

const Screen: React.FC<IScreenProps> = ({loading,children}) => {
  
  
  return <Wrapper>
    {children}
    <Footer/>
    </Wrapper>;
};

export default Screen;
