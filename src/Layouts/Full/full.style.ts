import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  position: absolute;
  top: 80px;
`;
