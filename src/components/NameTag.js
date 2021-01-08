import React from "react";

const NameTag = ({ firstName, lastName, style }) => {
  // destructuring props
  if (!firstName && !lastName) {
    return (
      <div className="name">
        <h3>Invalid Name</h3>
      </div>
    );
  }

  return (
    <div className="name">
      <h3 style={style}>First Name: {firstName}</h3>
      <h3 style={style}>Last Name: {lastName}</h3>
      {firstName === "Janne" && (
        <div
          style={{
            color: "magenta",
            marginBottom: "10px",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          VIP
        </div>
      )}
    </div>
  );
};

export default NameTag;

// fragment is an empty tag <> </>
