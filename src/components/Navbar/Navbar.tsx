import React from "react";
import { Navbar as NavBarComponent, Container } from "react-bootstrap";
import { CinemaIcon } from "../../graphics/icons";

const Navbar: React.FC = () => {
  return (
    <NavBarComponent bg="light" variant="light">
      <Container>
        <NavBarComponent.Brand>
          <CinemaIcon className="icon" />
          <h2 className="pt-5">Movie Store</h2>
        </NavBarComponent.Brand>
      </Container>
    </NavBarComponent>
  );
};

export default Navbar;
