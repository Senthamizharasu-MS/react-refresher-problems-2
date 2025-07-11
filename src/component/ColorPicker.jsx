import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("white");
  let list = [
    "Crimson",
    "MediumSeaGreen",
    "SlateBlue",
    "Gold",
    "Tomato",
    "DeepSkyBlue",
    "Orchid",
    "Coral",
    "DarkOliveGreen",
    "HotPink",
  ];
  return (
    <div>
      <div style={{ backgroundColor: color, height: 100 }}></div>
      {list.map((i, k) => (
        <button
          style={{ backgroundColor: i }}
          key={k}
          onClick={() => setColor(i)}
        >
          {i}
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;
