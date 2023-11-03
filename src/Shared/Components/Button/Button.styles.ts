import { ReactNode } from "react";
import styled from "styled-components";

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

export const Container = styled.button<IButtonInterface>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor:pointer;
  align-items: center;
  gap: ${({ gap }) => (gap ? gap : "10px")};
  width: ${({ width }) => (width ? width : "150px")};
  height: ${({ height }) => (height ? height : "40px")};
  border: ${({ border }) => ( border ? border : 'none')};
  color: ${({ color }) => (color ? color : '#808080' )};
  background: ${({ background }) => (background ? background : "#fff")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "6px")};
  padding: 0 ${({ padding }) => (padding ? padding : "20px")};
  transition: 0.6s ease;
  position: relative;
  cursor: pointer !important;
  &:hover {
    box-shadow: ${({ onHover }) =>
      onHover ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : ""};
    transform: translateY(-1px);
  }
`;