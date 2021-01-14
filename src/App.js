import React from "react";
import NameTag from "./components/NameTag";
import AgeCount from "./components/AgeCount";
import ControlledInput from "./components/ControlledInput";
import EmailJs from "./components/EmailJs";

import "./index.css";

function App() {
  return (
    <div className="container">
      <EmailJs />
    </div>
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
  */
