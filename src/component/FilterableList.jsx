import React, { useState } from "react";

const FilterableList = () => {
  const [name, setName] = useState(null);
  let list = ["Apple","Mango","Strawberry","Blueberry","Cherry","Banana","Orange"];
  return (
    <div>
      <div>
        <label>Search list: </label>
        <input type="text" onChange={(e)=>(setName(e.target.value))} />
      </div>
      <ul>
        {list.filter(i=>!name || i.toLowerCase().includes(name.toLowerCase())).map((i,k) => (
          <li key={k}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterableList;
