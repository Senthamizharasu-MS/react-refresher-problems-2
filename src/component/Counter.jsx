import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter</h2>
      <p>{count}</p>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          type="button"
          onClick={() => {
            setcount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          disabled={count < 1 ? true : false}
          type="button"
          onClick={() => {
            setcount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
