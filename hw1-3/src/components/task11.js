import React from "react";

function Task11() {
  const [state, setState] = React.useState(0);

  const handleClick1 = () => {
    setState((prevState) => prevState - 1);
  };
  const handleClick2 = () => {
    setState((prevState) => prevState + 1);
  };

  return (
    <div className="Task11">
      {console.log("render11")}
      <button onClick={handleClick1}>Click me - 1</button>
      {` ${state} `}
      <button onClick={handleClick2}>Click me + 1</button>
    </div>
  );
}

export default Task11;
