import styled from "styled-components";

export const Wrapper = styled.div<{ show: boolean | undefined }>`
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: scroll;
  height: 100vh;
  width: 100vw;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 10000000;
  
  .card {
    margin: auto;
  }
`;

export const BlurredBackground = styled.div<{ show: boolean | undefined }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props: any) => (props.show ? "auto" : "none")};
  transition: opacity 0.3s ease-in-out;
`;
