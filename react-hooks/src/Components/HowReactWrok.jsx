import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const HowReactWrok = () => {
  const [count, setCount] = React.useState(5);
  const [error, setError] = React.useState(null);

  const increment = () => {
    setCount(count + 1);
    setError(null);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setError("Greater than 0 plz 😡");
    }
  };

  const element = (
    <div>
      <div className="minutes ">
        <div className="minutes-icon">
          <FaMinus className="icons" onClick={decrement} />
          <div className="minutes-text">
            <h1>{count}</h1>
          </div>
          <h1>Minutes 😃</h1>
          <FaPlus className="icons" onClick={increment} />
        </div>
        <p className="error">
          {error && (
            <>
              <p>{error}</p>
              <button
                onClick={() => {
                  setError(null);
                }}
              >
                Dismiss
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
  console.log(element);
  return element;
};

export default HowReactWrok;

// const diff = compare(oldElement, newElement);
