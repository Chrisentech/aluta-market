import React, { ReactNode } from "react";
import { Container } from "./Button.styles";

interface IButtonInterface {
    gap?: string | number;
    width?: string | number;
    height?: string | number;
    border?: string | number;
    borderRadius?: string | number;
    hasBoxShadow?: boolean;
    color?: string | number;
    background?: string;
    className?: string;
    onHover?: boolean;
    padding?: string | number;
    children: ReactNode;
}

const Button: React.FC<IButtonInterface> = ({
  gap,
  width,
  height,
  border,
  borderRadius,
  hasBoxShadow,
  color,
  background,
  onHover,
  className,
  padding,
  children,
}) => {
  return (
    <Container
      gap={typeof gap === "number" ? gap + "px" : gap}
      width={typeof width === "number" ? width + "px" : width}
      height={typeof height === "number" ? height + "px" : height}
      border={typeof border === "number" ? border + "px" : border}
      borderRadius={
        typeof borderRadius === "number" ? borderRadius + "px" : borderRadius
      }
      hasBoxShadow={hasBoxShadow}
      color={color}
      background={background}
      className={className}
      onHover={onHover}
      padding={typeof padding === "number" ? padding + "px" : padding}
    >
      {children}
    </Container>
  );
};

Button.defaultProps = {
  gap: 10,
  height: 40,
  borderRadius: 6,
  background: "white",
  onHover:true,
  border: 'none'
};

export default Button;
