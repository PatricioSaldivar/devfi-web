import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Button } from "@chakra-ui/react";
import Saas1 from "../img/saas1.png";
import Saas3 from "../img/saas3.png";
import HeaderComponent from "./components/HeaderComponent";
import { useRef } from "react";
/**
 * Styled components definitions
 */
const TitleDark = styled.h1`
  color: #000;
  font-size: 2em;
  padding-left: 150px;
`;

const TitleWhite = styled.h6`
  color: #fff;
  font-size: 2em;
  text-align: center;
`;

const TitleOrange = styled.h1`
  color: #dd6b20;
  font-size: 2.4em;
  margin-bottom: 15px;
`;

const ProductDesctiption = styled.p`
  font-size: 20px;
  color: #000;
  margin-bottom: 15px;
  margin-right: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

const ImageSaas = styled.img`
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;
const CustomColContainer = styled(Col)`
  @media (max-width: 768px) {
    padding: 42px;
  }
`;

const DarkContainer = styled.div`
  background: #0f1f47;
  height: 350px;
  padding: 16px;
  margin-top: 32px;
`;

const Description = styled.h2`
  color: black;
  font-size: 1.2em;
`;

const Landing = () => {
  const whyRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const howRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const goToRefWhy = () => {
    if (whyRef.current) {
      whyRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const goToRefAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const goToRefHow = () => {
    if (howRef.current) {
      howRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const goToRefContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div
        style={{
          background: "#0F1F47",
        }}
      >
        {/* Header Component */}
        <HeaderComponent
          goToRefContact={goToRefContact}
          goToRefAbout={goToRefAbout}
        />
      </div>
      <TitleDark
        style={{
          textAlign: "center",
          marginBottom: "2em",
          padding: 0,
          marginTop: "2em",
        }}
      >
        Comparte de manera interactiva
        <br></br>tus proyectos
      </TitleDark>
      <Row className="test" style={{ textAlign: "center" }}>
        <Col xs={12} md={6}>
          <ImageContainer>
            <ImageSaas src={Saas1} height="500px" width="500px" />
          </ImageContainer>
        </Col>
        <CustomColContainer
          xs={12}
          md={6}
          style={{ textAlign: "left", alignSelf: "center" }}
        >
          <TitleDark
            style={{
              textAlign: "left",
              paddingLeft: 0,
              fontSize: 16,
              color: "#c4c4c5",
            }}
          >
            Promotor
          </TitleDark>
          <TitleOrange>Comparte tus proyectos</TitleOrange>
          <ProductDesctiption>
            Comparte tus proyectos en la plataforma para que los usuarios puedan
            interactuar con tus publicaciones y contactarse contigo.
          </ProductDesctiption>
          <Button
            colorScheme="orange"
            size="md"
            variant="outline"
            onClick={goToRefContact}
          >
            ¡Pruébalo ya!
          </Button>
        </CustomColContainer>
        <CustomColContainer
          xs={12}
          md={6}
          style={{ textAlign: "right", alignSelf: "center" }}
        >
          <TitleDark
            style={{
              textAlign: "right",
              paddingLeft: 0,
              fontSize: 16,
              color: "#c4c4c5",
            }}
          >
            Colaborador
          </TitleDark>
          <TitleOrange>Colabora con los demas</TitleOrange>
          <ProductDesctiption>
            Visualiza los diferentes proyectos publicados en Devfi para poder
            ver las diversas oportunidades donde puedas colaborar
          </ProductDesctiption>
          <Button
            colorScheme="orange"
            size="md"
            variant="outline"
            onClick={goToRefContact}
          >
            ¡Pruébalo ya!
          </Button>
        </CustomColContainer>
        <Col xs={12} md={6}>
          <ImageContainer>
            <ImageSaas src={Saas3} height="500px" width="500px" />
          </ImageContainer>
        </Col>
      </Row>
      <DarkContainer>
        <TitleWhite>Colabora y conoce personas de diversos paises</TitleWhite>
      </DarkContainer>
      <div style={{ padding: "16px" }}>
        <TitleDark style={{ textAlign: "center", padding: 0 }}>
          Nuestro objetivo
        </TitleDark>
        <Description
          style={{
            textAlign: "center",
            paddingLeft: "128px",
            paddingRight: "128px",
            paddingBottom: "128px",
            paddingTop: "64px",
          }}
        >
          El objetivo del proyecto es proporcionar una herramienta para que la
          comunidad de desarrolladores tengan formas más fáciles de conectar con
          otros desarrolladores con el objetivo de colaborar y elaborar
          proyectos interesantes.
        </Description>
      </div>
    </div>
  );
};

export default Landing;
