import React from "react";

function Task14() {
  const [index, setIndex] = React.useState(null);

  const handleClick = () => {
    setIndex(Math.floor(Math.random() * array.length));
  };

  const handleReset = () => {
    setIndex(null);
  };

  const array = ["html", "css", "scss", "js", "react", "angular"];

  return (
    <div className="Task14">
      {console.log("render14")}

      <button onClick={handleClick}>Click me</button>
      <div>{array?.[index]}</div>
      <button onClick={handleReset}>Clear</button>
    </div>
  );
}

export default Task14;
