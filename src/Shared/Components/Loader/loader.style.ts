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
  display: inline-block;
  z-index: 10000;
  position: relative;
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
