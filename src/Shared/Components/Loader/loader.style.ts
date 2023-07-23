import styled, { keyframes } from "styled-components";

// Keyframes for loader animation
const bounceAnimation = keyframes`
  from {
    transform: scaleX(1.25);
  }
  to {
    transform: translateY(-35px) scale(1);
  }
`;

// Styled Component for Loader Container
export const LoaderContainer = styled.span`
  // display: flex;
  // justify-content: center;
  // z-index: 1000000;
  // position: relative;
  // background: red;height:100%;
  // width: 100%;
  // align-items: center;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1000000;
  position: relative;
  width: 100%;
  height: 100vh;
  background: #1a17185c;
  justify-content: center;
  align-items: center;
  p {
    color: #fff;
  }
`;
// Styled Component for Loader Ball
export const LoaderBall = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #fff;
  margin-inline: 3px;
  border-radius: 50%;
  animation: ${bounceAnimation} 400ms alternate infinite;

  &:nth-child(2) {
    animation-delay: 100ms;
  }

  &:nth-child(3) {
    animation-delay: 250ms;
  }
`;
