import styled, { keyframes } from 'styled-components';

interface Timer {
    className?: string;
}

const CardFlip = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

export const CardContainer = styled.div<Timer>`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const TimeCard = styled.div`
  font-family: inter;
  width: 45px;
  height: 50px;
  border-radius: 4px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 1s;
  animation: ${CardFlip} 1s ease-in-out;
  background-color: #606060;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  span:first-child {
    font-size: 16px;
    font-weight: 700;
  }
  span:nth-child(2){
    font-size: 12px
    font-weight: 400;
  }
`;
