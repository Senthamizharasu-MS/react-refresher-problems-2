import React, { useState } from "react";

const Loginform = () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: null,
    password: null,
  });

  const handleSubmit = (e) => {
    const errors = {};
    if (!regex.test(data.email)) {
      errors.email = "Email is invalid.";
    }
    if (data.password.length < 6) {
      errors.password = "Password is too short.";
    }
    setError(errors);
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            onChange={(e) =>
              setData((preData) => ({
                ...preData,
                email: e.target.value,
              }))
            }
          />
          {error.email && <p>{error.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) =>
              setData((preData) => ({
                ...preData,
                password: e.target.value,
              }))
            }
          />
          {error.password && <p>{error.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Loginform;
