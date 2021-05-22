import React, { useContext } from "react";
import styled from "styled-components";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useProjects } from "../hooks/useProjects";
import { Project } from "../Types";
import ProjectComponent from "./components/ProjectComponent";
import { Button, Row } from "react-bootstrap";
import { UserContext } from "../context/UserContextProvider";
import { useUserProjects } from "../hooks/useUserProjects";

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
  flex-flow: column;
  color: black;
  height: 100%;
  width: 100%;
  background: white;
`;

const ProjectsView = () => {
  let history = useHistory();
  const { user } = useContext(UserContext);
  const { data: projects } = useUserProjects(user && user._id);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/landing");
      console.log("No access token");
    }
  }, []);
  return (
    <Container>
      <Button
        style={{ width: "100%" }}
        onClick={() => history.push("/project/add")}
      >
        Agregar nuevo proyecto.
      </Button>
      <Row
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {projects.length <= 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              height: 500,
            }}
          >
            <p style={{ alignSelf: "center" }}>
              Actualmente no existen proyectos.
            </p>
          </div>
        )}
        {projects.map((project: Project) => {
          return <ProjectComponent project={project} key={project._id} />;
        })}
      </Row>
    </Container>
  );
};
export default ProjectsView;
