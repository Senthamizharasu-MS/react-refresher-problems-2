import React, { useState } from "react";
import ChildCounter from "./ChildCounter";

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Parent Component</h2>
      <ChildCounter data={[counter, setCounter]} />
      <button type="button" onClick={() => setCounter(0)}>
        Reset Child Counter
      </button>
    </div>
  );
};

export default ParentComponent;
