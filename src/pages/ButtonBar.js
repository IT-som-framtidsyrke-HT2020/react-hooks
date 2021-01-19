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
    </ButtonToolbar>
  );
};

export default ButtonBar;
