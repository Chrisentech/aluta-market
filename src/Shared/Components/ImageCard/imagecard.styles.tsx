import styled from "styled-components";

export const Card = styled.div<{
	view?: string;
	width?: string;
	height?: string;
	padding?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: ${({ padding }) => (padding === padding ? padding : "20px")};
  width: ${({ width }) => (width ? width : "")};
  height${({ height }) => (height ? height : "200px")};
  //   padding-bottom: ${({ view }) => (view === "grid" ? "30px" : "")};
  border-bottom: ${({ view }) => (view === "grid" ? "1px solid #EFF2F4" : "")};
  object-fit:cover;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
