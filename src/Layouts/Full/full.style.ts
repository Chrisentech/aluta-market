import styled from "styled-components";

export const Wrapper = styled.div<{ loading: boolean }>`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  justify-content: ${(props) => (props.loading ? "center" : "unset")};
  align-items: ${(props) => (props.loading ? "center" : "unset")};
  background: ${(props) => (props.loading ? "#00000091" : "inherit")};
  position: absolute;
  top: 80px;
`;
