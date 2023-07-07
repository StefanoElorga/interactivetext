import React, { useState } from "react";
import face from "./happy.png";

export const Texto = () => {
  const [textColor, setTextColor] = useState("#ffff");
  const texto = "Hola Soy Stefano";

  const changeTextColor = () => {
    const randomColor = getRandomColor();
    setTextColor(randomColor);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="text-container">
      {texto.split(" ").map((palabra, index) => (
        <span key={index}>
          {palabra.split("").map((letra, letraIndex) => (
            <span
              key={letraIndex}
              className="letter"
              onMouseEnter={() => changeTextColor()}
            >
              {letra}
            </span>
          ))}
          &nbsp;
        </span>
      ))}
      <img src={face} className="face" />
    </div>
  );
};
