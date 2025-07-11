import React, { useState,useEffect } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(true);
  useEffect(() => {
    document.body.className = theme ? "light" : "dark";
  }, [theme]);

  return (
    <div className={`${theme ? "light" : "dark"}`}>
      <h2>Theme</h2>
      <p style={{ width: "500px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        doloribus tenetur animi qui, facilis nobis at aliquam dolore culpa amet
        ad earum quos nemo velit hic cupiditate officiis. Voluptate, eum?
      </p>
      <button type="button" onClick={() => setTheme(!theme)}>
        {theme ? "Enable Dark Mode" : "Disable Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeToggler;
