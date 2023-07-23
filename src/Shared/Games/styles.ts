import styled from "styled-components";

export const TicTacToeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  h2 {
    text-align: center;
  }
`;

export const TicTacToeBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 2px;
  background-color: #333;
  border: 2px solid #444;
`;
export const Cell = styled.div<{ isWinning: boolean | null }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: bold;
  color: ${({ isWinning }) => (isWinning ? "red" : "white")};
  background-color: ${({ isWinning }) =>
    isWinning ? "yellow" : "red"};
  cursor: pointer;
`;
export const Cross = styled.div``;
