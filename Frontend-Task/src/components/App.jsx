import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <button className="btn1 " onClick={decrease}>
        -
      </button>
      <h1>{count}</h1>
      <button className="btn2" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default App;
