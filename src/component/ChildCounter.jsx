import React from "react";

const ChildCounter = ({ data }) => {
  const [count, setCount] = data;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Child Counter</h2>
      <p>{count}</p>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          disabled={count < 1 ? true : false}
          type="button"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ChildCounter;
