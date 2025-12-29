import { useState, useEffect } from "react";

function Task4() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>
    </div>
  );
}

export default Task4;
