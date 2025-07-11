import React, { useState } from "react";

const ProgressBar = () => {
  const [bar, setBar] = useState(0);

  return (
    <div>
      <input
        value={bar}
        type="number"
        onChange={(e) =>
          setBar(
            e.target.value <= 100 && e.target.value >= 0 ? e.target.value : 0
          )
        }
      />
      <div style={{ backgroundColor: "lightgray", margin: "5px" }}>
        <div
          style={{
            backgroundColor: "green",
            height: 17,
            width: `${bar}%`,
            textAlign: "center",
          }}
        >
          {bar}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
