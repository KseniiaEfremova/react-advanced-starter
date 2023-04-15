import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  let handleClick = () => {
    setCount(count + 1);
  }
  return (
    <>
      <h2>You clicked {count} times</h2>
      <button onClick={handleClick} className="btn">Increment!</button>
    </>
  )
  
};

export default UseStateBasics;
