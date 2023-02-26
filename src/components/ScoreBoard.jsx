import React from "react";
import "../styles/ScoreBoard.css";

export const ScoreBoard = ({ scores }) => {
  const { scoreX, scoreO } = scores;
  
  return (
    <div className="score-board">
      <span className="x-score">X - {scoreX}</span>
      <span className="o-score">O - {scoreO}</span>
    </div>
  );
};
