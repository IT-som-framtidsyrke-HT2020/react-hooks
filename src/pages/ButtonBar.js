import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const ButtonBar = () => {
  return (
    <ButtonToolbar className="custom-btn-toolbar">
      <LinkContainer to="/">
        <Button>Home</Button>
      </LinkContainer>
      <LinkContainer to="/about">
        <Button>About</Button>
      </LinkContainer>
      <LinkContainer to="/users">
        <Button>Users</Button>
      </LinkContainer>
    </ButtonToolbar>
  );
};

export default ButtonBar;
