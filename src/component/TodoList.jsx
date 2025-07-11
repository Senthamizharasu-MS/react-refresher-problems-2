import React, { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState([]);
  // console.log(list);

  const handleSubmit = (e) => {
    e.preventDefault();
    let input = e.target.input.value;
    input.length > 0
      ? setList((preList) => [...preList, input])
      : console.log(list);
    e.target.input.value = "";
  };

  return (
    <div>
      <h2>Todo</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="input" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map((i, k) => (
          <li key={k}>
            <div
              style={{
                display: "inline-flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <p>{i}</p>
              <button onClick={() => setList(list.filter((val) => val != i))}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
