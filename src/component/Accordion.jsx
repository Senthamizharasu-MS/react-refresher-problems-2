import React, { useState } from "react";

const Accordion = () => {
  const [id, setId] = useState(null);

  const con = [
    {
      heading: "test1",
      content: "qwertyuiopasdfghjklxcvbnm,",
    },
    {
      heading: "test2",
      content: "qwertyuiopasdfghjklxcvbnm,",
    },
    {
      heading: "test3",
      content: "qwertyuiopasdfghjklxcvbnm,",
    },
  ];
  return (
    <div>
      {con.map((i, k) => (
        <div key={k}>
          <h2
            onClick={() => setId((prevIndex) => (prevIndex === k ? null : k))}
          >
            {i.heading}
          </h2>
          {id === k && <p>{i.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
