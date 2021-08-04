import React from "react";

function Task12() {
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="Task12">
      {console.log("render12")}
      <input value={inputValue} onChange={handleChange} />
      {` `}
      <input value={inputValue} onChange={handleChange} />
    </div>
  );
}

export default Task12;
