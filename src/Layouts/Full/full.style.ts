import styled from "styled-components";

export const Wrapper = styled.div<{ loading: boolean }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  justify-content: ${(props) => (props.loading ? "center" : "unset")};
  align-items: ${(props) => (props.loading ? "center" : "unset")};
  background: ${(props) => (props.loading ? "#00000091" : "inherit")};
`;
