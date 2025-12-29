import react from 'react';
import { useEffect } from 'react';

function Task1UseEffect() {
  useEffect(() => {
    console.log("Rendered!");
  });

  return <div>Hello</div>;
}

export default Task1UseEffect;
