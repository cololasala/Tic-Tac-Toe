import React from "react";
import "../styles/Box.css";

export const Box = ({ value, onClick }) => {
  const styleBox = value === "X" ? "box x" : "box o";

  return (
    <>
      <button className={styleBox} onClick={onClick}>
        {value}
      </button>
    </>
  );
};
