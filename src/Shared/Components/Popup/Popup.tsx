import React, { ReactNode } from "react";
import { Wrapper, BlurredBackground } from "./popup.styles";
import { Card, Toast } from "..";

interface IPopupProps {
  show: boolean | undefined;
  children: ReactNode;
  width?: string;
  height?: string;
  className?: string;
}
const Popup: React.FC<IPopupProps> = ({
  show,
  children,
  className,
  // width,
  height,
}) => {

  return (
    <Wrapper show={show} className={className}>
      <BlurredBackground show={show} />
      <Toast />
      <Card
        width="auto"
        height={height}
        borderRadius={"20px"}
        padding={"0"}
        className="card"
      >
        {children}
      </Card>
    </Wrapper>
  );
};

Popup.defaultProps = {
  show: true,
};

export default Popup;
