import React, { useState } from "react";

const AccordionAdvance = () => {
  const [id, setId] = useState(null);

  const con = [
    {
      heading: "test1",
      content: "qwertyuiopasdfghjklxcvbnm",
    },
    {
      heading: "test2",
      content: "qwertyuiopasdfghjklxcvbnm",
    },
    {
      heading: "test3",
      content: "qwertyuiopasdfghjklxcvbnm",
    },
  ];
  return (
    <div>
      {con.map((i, k) => (
        <div
          key={k}
          style={{ backgroundColor: id === k ? "lightpink" : "white" }}
        >
          <p
            style={{
              fontSize: id == k ? 26 : 18,
              fontWeight: id == k ? "bold" : "normal",
            }}
            onClick={() => setId((prevIndex) => (prevIndex === k ? null : k))}
          >
            {id == k ? i.heading.toUpperCase() : i.heading}
          </p>
          {id === k && <p>{i.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default AccordionAdvance;
