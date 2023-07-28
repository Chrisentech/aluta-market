import styled from "styled-components";

export const Wrapper = styled.div<{ show: boolean | undefined }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 10000000;
`;

export const BlurredBackground = styled.div<{ show: boolean | undefined }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props: any) => (props.show ? "auto" : "none")};
  transition: opacity 0.3s ease-in-out;
`;
