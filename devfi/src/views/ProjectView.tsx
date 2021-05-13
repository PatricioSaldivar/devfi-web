import React, { useContext } from "react";
import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";
import { useProject } from "../hooks/useProject";
import { Tag } from "@chakra-ui/react";
import { Button } from "react-bootstrap";

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
  display: flex;
  padding: 16px;
  color: black;
  height: 650px;
  width: 100%;
  background: white;
`;

const ProjectTitle = styled.h1`
  font-size: 42px;
`;

interface ParamTypes {
  id: string;
}

const ProjectView = () => {
  let history = useHistory();
  const { user } = useContext(UserContext);
  let { id } = useParams<ParamTypes>();
  const { data: project } = useProject(id);
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/landing");
      console.log("No access token");
    }
  }, []);
  return (
    <Container>
      <div>
        <ProjectTitle>{project.name}</ProjectTitle>
        {project.tags &&
          project.tags.map((tag: string, index: number) => {
            return (
              <Tag style={{ marginRight: 10 }} key={index}>
                {tag}
              </Tag>
            );
          })}
        <h1>{project.description}</h1>
        {project.mail && (
          <h1>
            Correo de contacto:{" "}
            <a href={`mailto:${project.mail}`}>{project.mail}</a>
          </h1>
        )}

        {project.user === user._id && (
          <Button onClick={() => history.push(`/project/edit/${project._id}`)}>
            Editar projecto
          </Button>
        )}
      </div>
    </Container>
  );
};
export default ProjectView;
