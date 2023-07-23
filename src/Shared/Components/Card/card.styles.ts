import styled from "styled-components";
import { ICardInterface } from "../../../Interfaces";

export const Container = styled.div<ICardInterface>`
  width: ${({ width }) => (width ? `calc(${width} - 40px)` : "400px")};
  min-height: ${({ height }) => (height ? height : "400px")};
  background: ${({ background }) => (background ? background : "#fff")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "6px")};
  padding: ${({ padding }) => (padding ? padding : "20px")};
  transition: 0.6s ease;
  position: relative;
  cursor: pointer;
  box-shadow: ${({ hasBoxShadow }) =>
    hasBoxShadow ? " rgba(149, 157, 165, 0.2) 0px 8px 24px;" : ""};
  &:hover {
    box-shadow: ${({ onHover }) =>
      onHover ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : ""};
    transform: translateY(-1px);
  }
`;
