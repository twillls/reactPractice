import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  // Adding a cleanup function inside of our effect will call the
  // cleanup function before each re-render, then unmount the event
  // listener.
  // Functions returned by an effect are always treated as a cleanup
  // function. 
  const increment = () => setClickCount((prev) => prev + 1);

  useEffect(() => {
    document.addEventListener('mousedown', increment);

    return () => {
      document.removeEventListener('mousedown', increment);
    };
  });

  return (
      <h1>Document Clicks: {clickCount}</h1>
  );
}