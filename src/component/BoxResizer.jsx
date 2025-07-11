import React, { useState } from "react";

const BoxResizer = () => {
  const [size, setSize] = useState(200);
  return (
    <div style={{ height: 450 }}>
      <button
        type="button"
        disabled={size >= 400 ? true : false}
        onClick={() => setSize((preSize) => preSize + 20)}
      >
        Increase Size
      </button>
      <button
        type="button"
        disabled={size <= 20 ? true : false}
        onClick={() => setSize((preSize) => preSize - 20)}
      >
        Decrease Size
      </button>
      <div style={{ backgroundColor: "blue", width: size, height: size }}></div>
    </div>
  );
};

export default BoxResizer;
