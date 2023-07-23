import React, { ReactNode } from "react";
import { Wrapper } from "./full.style";
import { Footer } from "../../Shared/Components";

interface IScreenProps{
  children:ReactNode,
}

const Screen: React.FC<IScreenProps> = ({children}) => {
  
  
  return <Wrapper>
    {children}
    <Footer/>
    </Wrapper>;
};

export default Screen;
