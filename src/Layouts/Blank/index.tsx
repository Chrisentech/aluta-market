import React, { ReactNode } from "react"
import { Wrapper } from "./blank.style"
import { Loader } from "../../Shared/Components";

interface IScreenProps {
  loading: boolean;
  children: ReactNode;
}

const Screen: React.FC<IScreenProps> = ({ loading, children }) => {
  return (
    <Wrapper>
      {loading && <Loader />}
      {children}
    </Wrapper>
  );
};

export default Screen