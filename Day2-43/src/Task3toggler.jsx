import react, { useState } from "react";
export default function Task3toggler() {
    const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
        <button onClick={() => setIsToggled(!isToggled)}>{isToggled ? "ON" : "OFF"}</button>
        <p>{isToggled ? "The Blub is OFF" : "The Blub is ON"}</p>
    </div>
  )}