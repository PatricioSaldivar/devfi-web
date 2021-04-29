import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
const FooterContainer = styled.section`
  background: #0f1f47;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const FooterSubTitle = styled.h4`
  color: white;
  font-weight: bold;
  border-left: 1px black solid;
  border-right: 1px black solid;
`;

const FooterContent = styled.p`
  color: white;
`;

const FooterComponent = () => {
  return (
    <div>
      <FooterContainer>
        <Container fluid>
          <Row
            style={{
              justifyContent: "center",
              textAlign: "center",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            <Col xs={12} md={6} lg={4}>
              <FooterSubTitle>DEVFI</FooterSubTitle>
              <FooterContent>
                Con nuestra plataforma es muy fácil encontrar personas que más
                se adapaten a tu proyecto.
              </FooterContent>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <FooterSubTitle>UBICACIÓN</FooterSubTitle>
              <FooterContent>
                <b>Monterrey, Mexico</b>
              </FooterContent>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <FooterSubTitle>CONTACTO</FooterSubTitle>
              <FooterContent style={{ textAlign: "center" }}>
                <p>
                  <b>
                    81 1600 5234
                    <br></br>
                  </b>
                </p>
              </FooterContent>
            </Col>
            <Col xs={12} style={{ marginTop: "30px" }}>
              <div
                style={{
                  display: "flex",
                  flexFlow: "row",
                  justifyContent: "center",
                }}
              >
                <p style={{ color: "white" }}>&#169; Copyright 2021 - Devfi</p>
              </div>
            </Col>
          </Row>
        </Container>
      </FooterContainer>
    </div>
  );
};

export default FooterComponent;
