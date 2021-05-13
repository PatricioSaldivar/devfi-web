import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Button } from "@chakra-ui/react";
import Collaborate from "../../img/collaborate.png";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: transparent;
  background-blend-mode: screen;
`;
const ImageHeader = styled.img`
  @media (max-width: 766px) {
    display: none;
  }
`;
const ContainerRow = styled(Row)`
  margin-bottom: 9.5em;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.4em;
`;

const HeaderComponent = () => {
  let history = useHistory();
  return (
    <div style={{ position: "relative" }}>
      <Container>
        <ContainerRow style={{ width: "100%", marginTop: "12.5em" }}>
          <Col
            xs={12}
            md={6}
            style={{
              textAlign: "right",
              paddingLeft: "60px",
              alignSelf: "center",
            }}
          >
            <Title
              style={{
                textAlign: "right",
                color: "#3182ce",
                fontSize: "3em",
                fontWeight: "bold",
              }}
            >
              Devfi
            </Title>
            <Title style={{ textAlign: "right", fontSize: "3em" }}>
              Haz tus proyectos de{" "}
            </Title>
            <Title style={{ textAlign: "right", fontSize: "3em" }}>
              la manera que tú quieras y con quien tú quieras
            </Title>
            <div style={{ marginTop: "1.2em" }}>
              <Button
                colorScheme="blue"
                size="md"
                style={{ marginRight: "10px" }}
                onClick={() => history.push("/register")}
              >
                ¡Pruébalo ya!
              </Button>
              <Nav.Link
              style={{ color: "white", alignSelf: "center" }}
              href="/FAQ"
            >
              {" "}
              <Button colorScheme="whiteAlpha" size="md" variant="outline">
                Preguntas Frecuentes
              </Button>
            </Nav.Link>
              
            </div>
          </Col>
          <Col xs={12} md={6} style={{ zIndex: 1000 }}>
            <ImageHeader src={Collaborate} style={{ maxWidth: "350px" }} />
          </Col>
        </ContainerRow>
      </Container>
    </div>
  );
};

export default HeaderComponent;
