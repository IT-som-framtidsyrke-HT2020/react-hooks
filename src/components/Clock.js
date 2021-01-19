import React, { useState, useEffect } from "react";

const initXy = {
  x: null,
  y: null,
};

const Clock = () => {
  const [time, setTime] = useState(Date);
  const [xy, setXy] = useState(initXy);

  useEffect(() => {
    let handle = setInterval(() => {
      setTime(Date);
    }, 1000);

    // If we dont clear the time interval in this useEffect example
    // this would create an interval every second which would make our
    // code crash eventually.
    return () => {
      clearInterval(handle);
    };
  }, []);

  /* useEffect(() => {
    // we can manipulate the mouse pointer like this
    // x and y now shows our mouse ponters position
    window.addEventListener("mousemove", mousemoveHandler);
    const mousemoveHandler = (e) => {
      setXy({
        x: e.clientX,
        y: e.clientY,
      });
    };
  }, []);*/

  return (
    <div>
      <h3>Date & Time: {time}</h3>
      <h3>{`x: ${xy.x}, y: ${xy.y}`}</h3>
    </div>
  );
};

export default Clock;
