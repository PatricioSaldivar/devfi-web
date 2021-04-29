import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import Menu from "../../img/menu.png";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
const MenuWrapper = styled.div`
  .navbar-toggler-icon {
    background-image: url(${Menu});
  }
  .navbar-toggler {
    border-color: rgba(0, 0, 0, 0);
    outline: none;
    box-shadow: none;
  }
`;

const NavbarComponent = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          background: "#0F1F47",
          zIndex: 1000,
          position: "absolute",
          paddingTop: 50,
          paddingLeft: 50,
          paddingRight: 50,
          width: "100%",
        }}
      >
        <Navbar.Brand style={{ color: "white" }} href= "/">
          <img alt="logo" width="42px" height="42px" />
        </Navbar.Brand>
        <MenuWrapper>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </MenuWrapper>
        <Navbar.Collapse className="justify-content-center">
          <Nav className="justify-content-end navbar-right">
            <Nav.Link
              style={{
                color: "white",
                alignSelf: "center",
              }}
            >
              ¿Por qué Devfi?
            </Nav.Link>
            <Nav.Link
              style={{
                color: "white",
                alignSelf: "center",
              }}
            >
              Sobre nosotros
            </Nav.Link>
            <Nav.Link
              style={{
                color: "white",
                alignSelf: "center",
              }}
            >
              ¿Cómo funciona?
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end navbar-right">
            <Nav.Link
              style={{
                color: "white",
                alignSelf: "center",
              }}
              href="/login"
            >
              Iniciar sesión
            </Nav.Link>
            <Nav.Link style={{ color: "white", alignSelf: "center" }} href="/register">
              {" "}
              <Button colorScheme="blue" size="md">
                Registrate
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
