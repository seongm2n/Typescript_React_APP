import React, { useState } from "react";

export function UseReduce() {
  const [count, setCount] = useState(0);
  return (
    <div className="layout">
      <h1>useReduce</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        0
      </button>
      {count}
    </div>
  );
}