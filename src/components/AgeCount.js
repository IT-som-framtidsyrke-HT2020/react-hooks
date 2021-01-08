import React, { useState } from "react";

const AgeCount = () => {
  const [age, setAge] = useState(24);
  // useState is a function so we need to init a value
  // this will return an array, and the array has 2 values
  // first value is a getter and second is a setter

  // Function for increasing the age
  const handleAgeUp = () => {
    setAge(age + 1);
    // we call setAge so we can change the state from state plus 1
    // remember that our initial state is 24 but this line of code doesnt mean its always 24 + 1
    // since our state can change so its always exactly what state is when clicking the button plus 1
  };

  // Function for decreasing the age
  const handleAgeDown = () => {
    setAge(age - 1);
    // we call setAge so we can change state from state minus 1
  };

  return (
    <div>
      <h1>Use State Hook</h1>
      <h2>Age: {age}</h2>
      <button onClick={handleAgeUp}>Age up</button>
      <button onClick={handleAgeDown}>Age down</button>
    </div>
  );
  // since we are not using classes you dont have to use this.age
  // it becomes much more simple
  // useState sets the initial value and then gives us two variables by
  // destructuring. Age gives us the value and setAge will give us the
  // possibility to update the value.
};

export default AgeCount;
