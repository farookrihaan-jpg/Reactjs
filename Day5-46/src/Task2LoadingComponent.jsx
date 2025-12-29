import { useEffect } from "react";

export default function Task2LoadingComponent() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return <div>Componentloaded</div>;
}
