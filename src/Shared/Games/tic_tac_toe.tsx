import React, { useState } from "react";
import { Cell, TicTacToeBoard, TicTacToeWrapper } from "./styles.ts";

type Player = "X" | "O" | null;



const initialBoardState: Player[] = Array(9).fill(null);

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | null>(null);

  const checkWinner = (boardState: Player[]): Player | null => {
    const winningCombinations = [
      //hroizontal wins
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //vertical wins
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      //diagonal wins
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        boardState[a] &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      ) {
        return boardState[a];
      }
    }

    return null;
  };

  const handleCellClick = (index: number) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const newWinner = checkWinner(newBoard);
      if (newWinner) {
        setWinner(newWinner);
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    }
  };

  const handleRestart = () => {
    setBoard(initialBoardState);
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <TicTacToeWrapper>
      <h2>Tic Tac Toe</h2>
      <TicTacToeBoard>
        {board.map((player, index) => (
          <Cell
            key={index}
            onClick={() => handleCellClick(index)}
            isWinning={winner && winner === player}
          >
            {player}
          </Cell>
        ))}
      </TicTacToeBoard>
      {winner && (
        <div>
          <p>{`${winner} wins!`}</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </TicTacToeWrapper>
  );
};

export default TicTacToe;

/**
 * import React, { useState, useEffect } from "react";
import { Cell, TicTacToeBoard, TicTacToeWrapper } from "./styles.ts";

type Player = "X" | "O" | null;

const initialBoardState: Player[] = Array(9).fill(null);

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | null>(null);
  const [gameMode, setGameMode] = useState<"player-vs-player" | "player-vs-ai">("player-vs-player");

  const checkWinner = (boardState: Player[]): Player | null => {
    // ... (same as your existing checkWinner function)
  };

  const handleCellClick = (index: number) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const newWinner = checkWinner(newBoard);
      if (newWinner) {
        setWinner(newWinner);
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

        // If game mode is "Player vs. AI", trigger AI move after the player's move
        if (gameMode === "player-vs-ai") {
          setTimeout(makeAIMove, 500); // Add a small delay to simulate AI "thinking"
        }
      }
    }
  };

  const handleRestart = () => {
    setBoard(initialBoardState);
    setCurrentPlayer("X");
    setWinner(null);
  };

  // Function to handle AI moves (random move)
  const makeAIMove = () => {
    if (!winner) {
      const emptyCells = board.reduce<number[]>((acc, cell, index) => {
        if (!cell) acc.push(index);
        return acc;
      }, []);

      if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        handleCellClick(emptyCells[randomIndex]);
      }
    }
  };

  useEffect(() => {
    // When the game mode changes, reset the board and winner state
    setBoard(initialBoardState);
    setCurrentPlayer("X");
    setWinner(null);

    // If game mode is "AI vs. AI", trigger AI move for the first turn
    if (gameMode === "ai-vs-ai") {
      setTimeout(makeAIMove, 500); // Add a small delay to simulate AI "thinking"
    }
  }, [gameMode]);

  return (
    <TicTacToeWrapper>
      <h2>Tic Tac Toe</h2>
      <div>
        <button onClick={() => setGameMode("player-vs-player")}>Player vs. Player</button>
        <button onClick={() => setGameMode("player-vs-ai")}>Player vs. AI</button>
      </div>
      <TicTacToeBoard>
        {board.map((player, index) => (
          <Cell
            key={index}
            onClick={() => handleCellClick(index)}
            isWinning={winner && winner === player}
          >
            {player}
          </Cell>
        ))}
      </TicTacToeBoard>
      {winner && (
        <div>
          <p>{`${winner} wins!`}</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </TicTacToeWrapper>
  );
};

export default TicTacToe;

 */