import React, { useState } from "react";

// JS
// const input = document.getElementById("myText");
// const inputValue = input.value

// REACT
// value, onChange

const ControlledInput = () => {
  //const [firstName, setFirstName] = useState("");
  //const [email, setEmail] = useState("");

  // update one state object instead of separate
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // new state value for adding people to and array
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    //console.log(name, value);
    // dynamically updating state values
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // checks if all the fields are filled. If not we cant send our form.
    if (person.firstName && person.lastName && person.email) {
      // assigns a unique id to our values
      const newPerson = { ...person, id: new Date().getTime().toString() };
      // updating state
      setPeople([...people, newPerson]);
      // clearing state so our inputs are cleared
      setPerson({ firstName: "", lastName: "", email: "" });
    } else {
      alert("Empty values");
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <h2>Controlled inputs</h2>
      <div>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={person.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <button className="form-btn" type="submit" onClick={handleSubmit}>
            Add Person
          </button>
        </form>
        {people.map((person, index) => {
          // destructuring
          const { id, firstName, lastName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <h4>{lastName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ControlledInput;

/*
const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(firstName, email);

    // add people to the peoples array
    if (firstName && email) {
      //console.log("Submit the form");
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      // clear input
      setFirstName("");
      setEmail("");
    } else {
      alert("Empty values..");
    }
  };

CONTROLLED INPUT

For a controlled input you need a value prop that reference some value and onchange event listener
we have to options with the form. We can ad an onSubmit event och an onClick event
when submitting the form. The important thing is to set the type in the button to "submit"

const handleSubmit = (e) => {
  console.log("hello world");
}

In the example above we wont see the console.log in our console.. this is because by default the browser
will try to submit the form and then refresh the page and thats why we dont see this
but we do have acess to the event object. And we can use event.preventDefault()
to basically say that we want to deal with this data on our own so dont follow
the default behavior. 

const handleSubmit = (e) => {
  event.preventDefault();
  console.log("hello world");
}

And now we see hello world!

So now lets connect our input to the state so we can access the data
We need to add to attributes to our input. One is value and the other one onChange event
The value will be a reference to our state. If we only use value and save we will see an error here because if we
use value we need to have an onchange event
and if we try to type now it wont work... we need to handle this with the onchange event
onChange event we will code inline. 
we will use the event object and then we need the event target value, we did this with basic js


with map we can do like the index and set key={i} but we will have a problem if we start 
removing things here
to get a unique value you mostly use a package called uuid, inthis case we did a little cheat :)
*/
