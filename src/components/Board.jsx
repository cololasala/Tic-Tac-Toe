import React from "react";
import "../styles/Board.css";
import { Box } from "./Box";

export const Board = ({ board,  onClick}) => {

  return (
    <div className="board">
      {board.map((value, index) => {
        return <Box key={index} value={value} onClick={() => onClick(index)} />;
      })}
    </div>
  );
};
