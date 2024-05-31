import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  // Effects run after every render
  // This will be called every time the DOM reloads and therefore,
  // every time the state is changed (button is clicked),
  // alerting the user to how many times they have clicked
  useEffect(() => {
    console.log(`Count: ${count}`);
  });  

  const handleClick = () => {
    setCount((prevCount) =>  prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}