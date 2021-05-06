import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import Menu from "../../img/menu.png";
import { Button } from "@chakra-ui/react";
import { RefObject } from "react";
import Logo from "../../img/logo.png";
import { useHistory } from "react-router";
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
interface NavbarProps {
  shareRef: RefObject<HTMLDivElement>;
  collabRef: RefObject<HTMLDivElement>;
  objectRef: RefObject<HTMLDivElement>;
}

const NavbarComponent = (props: NavbarProps) => {
  const gotoShare = () => {
    if (props.shareRef.current) {
      props.shareRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const signOut = () => {
    localStorage.removeItem("accessToken")
  }
  const gotoCollab = () => {
    if (props.collabRef.current) {
      props.collabRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const gotoObject = () => {
    if (props.objectRef.current) {
      props.objectRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
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
        <Navbar.Brand style={{ color: "white" }} href="/">
          <img alt="logo" width="42px" height="42px" src={Logo} /> Devfi
        </Navbar.Brand>
        <MenuWrapper>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </MenuWrapper>
        {
          !localStorage.getItem("accessToken") && 
        <Navbar.Collapse className="justify-content-center">
          <Nav className="justify-content-end navbar-right">
            <Nav.Link
              style={{
                color: "white",
                alignSelf: "center",
              }}
              onClick={gotoShare}
            >
              ¿Por qué Devfi?
            </Nav.Link>
            <Nav.Link
              style={{
                color: "white",
                alignSelf: "center",
              }}
              onClick={gotoCollab}
            >
              ¿Cómo funciona?
            </Nav.Link>
            <Nav.Link
              style={{
                color: "white",
                alignSelf: "center",
              }}
              onClick={gotoObject}
            >
              Nuestro objetivo
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        }
        <Navbar.Collapse className="justify-content-end">
        {
          !localStorage.getItem("accessToken") && 
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
            <Nav.Link
              style={{ color: "white", alignSelf: "center" }}
              href="/register"
            >
              {" "}
              <Button colorScheme="blue" size="md">
                Registrate
              </Button>
            </Nav.Link>
          </Nav>
        }

        {
          localStorage.getItem("accessToken") && 
          <Nav className="justify-content-end navbar-right">
            <Nav.Link
              style={{
                color: "white",
                alignSelf: "center",
              }}
              onClick={signOut}
              href="/"
            >
              Cerrar sesión
            </Nav.Link>
          </Nav>
        }

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
