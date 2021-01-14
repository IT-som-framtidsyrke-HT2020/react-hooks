import React, { useState } from "react";

// JS
// const input = document.getElementById("myText");
// const inputValue = input.value

// REACT
// value, onChange

const ControlledInput = () => {
  //const [firstName, setFirstName] = useState("");
  //const [email, setEmail] = useState("");

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

    console.log(name, value);
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
*/
