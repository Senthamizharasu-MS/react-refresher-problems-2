import React, { useState } from "react";

const ImageGallery = () => {
  const [id, setId] = useState(0);
  const arr = [
    "https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2lsZGxpZmV8ZW58MHwyfDB8fHwy",
    "https://images.unsplash.com/flagged/photo-1557650454-65194af63bf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmV8ZW58MHwyfDB8fHwy",
    "https://images.unsplash.com/photo-1588167056547-c183313da47c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2lsZGxpZmV8ZW58MHwyfDB8fHwy",
    "https://images.unsplash.com/photo-1559899289-df9330a3116a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbGRsaWZlfGVufDB8MnwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1517339234442-5cfdc9a90a69?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbGRsaWZlfGVufDB8MnwwfHx8Mg%3D%3D",
  ];
  return (
    <div>
      <img style={{ width: 300, height: 300 }} src={arr[id]} alt="" />
      <div>
        {arr
          .filter((_, i) => i !== id)
          .map((i, k) => (
            <img
              style={{ width: 100, height: 100 }}
              key={k}
              src={i}
              alt=""
              onClick={() => setId(arr.indexOf(i))}
            />
          ))}
      </div>
    </div>
  );
};

export default ImageGallery;
