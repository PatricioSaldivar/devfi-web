import React from "react";
import styled from "styled-components";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useProjects } from "../hooks/useProjects";
import { Project } from "../Types";
import ProjectComponent from "./components/ProjectComponent";
import { Row } from "react-bootstrap";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0f1f47",
    },
    secondary: {
      main: "#0f1f47",
    },
  },
});

const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  color: black;
  height: 100%;
  width: 100%;
  background: white;
`;

const Login = () => {
  let history = useHistory();
  const { data: projects } = useProjects();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/landing");
      console.log("No access token");
    }
  }, []);

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {projects.length <= 0 && <p>Actualmente no existen proyectos.</p>}
        {projects.map((project: Project) => {
          return <ProjectComponent project={project} key={project._id} />;
        })}
      </Row>
    </Container>
  );
};
export default Login;
