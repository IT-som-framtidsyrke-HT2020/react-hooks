import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NameTag from "./components/NameTag";
import AgeCount from "./components/AgeCount";
import ControlledInput from "./components/ControlledInput";
import EmailJs from "./components/EmailJs";
import Clock from "./components/Clock";

import "./index.css";

let born = false;

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route
          path="/"
          render={() => {
            return <h1>Home Page</h1>;
          }}
        ></Route>
        <Route
          path="/about"
          render={() => {
            return <h1>About Page</h1>;
          }}
        ></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
1. STYLING
We looked at three different ways of styling components.
1. Inline styling: <h3 style={{ color: "gray", border: "1px solid gray" }}>Helena</h3>
which wasnt good for us cause we had to repeat it..
2. Styling as an object: 
const nameStyle = {
  color: "gray",
  border: "1px solid gray",
  paddingTop: "5px",
  paddingBottom: "5px",
  width: "300px",
  textAlign: "center",
};

const nameTagTitle = {
  color: "purple",
  borderColor: "purple",
  borderStyle: "dotted",
};

 <h3 style={nameStyle}>Helena</h3>

 wasnt really what we where looking for either. But we could give our <h1></h1> both style objects by using spread operator
 <h1 style={{ ...nameStyle, ...nameTagTitle }}>Name List</h1>
 3. We styled with basic css in our css file by using className. We gave our <h1></h1> both classes by saying className="name title"
 both our css classes.
 We learned that with inline or object styling we cant write like we do in our css file. For example border-color didnt work
 we had to use camelcase instead borderColor and then we needed to specify a string like this borderColor: "purple"

 2. PROPS & DESTRUCTURING PROPS
 We learned how to pass props to a function component. We dont have to use the keyword this in a function component. If we dont
 destructure our props we need to pass props to our component like this => const Example = (props) => {...}
 and then use it like this {props.name}
 we also learned how to destructure props by doing this instead => const Example = ({ firstName, lastName }) => {...}
 by doing so we do not have to use the keyowrd props we can just use the prop like this {firstName} and the other one {lastName}
 so we use props to pass data, information, to another component. The information we want to pass we specify just like we specify
 a parameter in a function.

 3. CONDITIONAL RENDERING
 First we did a conditional rendering to check if there was a first name and last name, if not we rendered "Invalid name".
 We did that by using an if statement.
 then we did a conditional rendering to display "VIP" in a certain color to a specific name. We did exactly the same as in the if statement 
 but just in a different way. 

 4.  HIGHER ORDER COMPONENT
Javascript has higher order function is a function that takes function as an argument
and it return another function. Higher order comp is pretty much the same
a function that takes component as an argument
job is to transform, mostrly you do something with the props and then you return a component

Lets say the nametag Janne will be all green

makeGreen: the function takes an argument, the base component with some props
then it takes the props and adds new prop
and then returns the same component with the new props

its not showing yet so lets go to nametag so we need an extra prop

const makeGreen = (BaseComponent) => (props) => {
  const addGreen = {
    style: {
      color: "green",
    },
  };

  const newProps = {
    ...props,
    ...addGreen,
  };

  return <BaseComponent {...newProps} />;
};

const GreenNameTag = makeGreen(NameTag);

<h1 className="name title">Name List</h1>
  <NameTag firstName="Helena" lastName="Johansson"></NameTag>
  <GreenNameTag firstName="Janne" lastName="Janesson"></GreenNameTag>
  <NameTag firstName="Oskar" lastName="Oskarsson"></NameTag>

  5. USEEFFECT
useEffect has a completeley different signature/syntax than useState
its a function thats accepts two parameters, a callback functions and a second parameter that
usually is an empty array. It runs when the component is mounted either the first time or updated. 
it depends on the second parameter, if i pass an empty array here the component is mounted/born
we can see the consol.log at once and it only runs one time

and if i dont want it to run on initial mount we can create a variable
now it ony runs when i update

const [growth, setGrowth] = useState(0);
  const [stop, setStopped] = useState(false);

  // stop component lifecycle
  useEffect(() => {
    if (born) {
      document.title = "Stopped";
    }
  }, [stop]);

  // runs first time, when component is mounted
  useEffect(() => {
    console.log("I am born");
  }, []);
  // first argument is a callback function and second can be an empty array

  // runs every time the component is updated
  useEffect(() => {
    if (born) {
      console.log("Make mistake and learn");
    } else {
      born = true;
    }

    if (growth > 70) {
      setStopped(true);
    }

    return function cleanUp() {
      console.log("Cleanup after mistakes");
    };
  });

  const handleGrowth = () => {
    setGrowth(growth + 10);
  };

    <h2>Use Effect</h2>
      <h3>Growth: {growth}</h3>
      <button onClick={handleGrowth}>Learn and grow</button>
      <div>
        <h2>Use Effect Example</h2>
        <Clock />
      </div>

*/
