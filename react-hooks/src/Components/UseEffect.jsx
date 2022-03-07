import React from "react";

const UseEffect = () => {
  const [isOn, setIsOn] = React.useState(false);
  const [timer, setTimer] = React.useState(0);
  const [data, setData] = React.useState();
  const [count, setCount] = React.useState(0);

  //Timer using useEffect Hook & setInterval

  React.useEffect(() => {
    let interval = null;
    if (isOn) {
      interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isOn, timer]);

  const onReset = () => {
    setIsOn(false);
    setTimer(0);
  };

  //Fetch API Using useEffect Hook

  React.useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => {
    const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json();
    setData(data.slip.advice);
  };

  //useEffectClickCouter

  const increment = () => {
    setCount(count + 1);
  };

  React.useEffect(() => {
    alert(`Current Count is ${count}`);
  }, [count]);

  React.useEffect(() => {
    document.title = `Current Count is ${count}`;
  }, [count]);

  return (
    <div className="timer">
      <h1>{timer}</h1>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "Stop" : "Start"}</button>
      <button onClick={onReset}>Reset</button>
      <h1>Click Counter</h1>
      <p>Amount of clicks: {count}</p>
      <button onClick={increment}>Click me!</button>
      <h1>Advice API</h1>
      <p>{data}</p>
    </div>
  );
};

export default UseEffect;
