import React from "react";

function Task13() {
  const [state, setState] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setState(inputValue);
  };

  return (
    <div className="Task13">
      {console.log("render13")}
      <input value={inputValue} onChange={handleChange} />
      {` `}
      <button onClick={handleClick}>Click me</button>
      <div>{state}</div>
    </div>
  );
}

export default Task13;
